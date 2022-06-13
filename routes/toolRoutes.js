import axios from 'axios'
import express from 'express'
import _3dApp from '../models/3dAppModel.js'
import ApiCalls from '../models/apiCalls.js'
import CreationTool from '../models/creationToolModel.js'
import RecognitionTool from '../models/recognitionToolModel.js'
import TopApp from '../models/topAppModel.js'
const router = express.Router()

const getCreationTools = async () => {
    return (await CreationTool.find({}, { title: 1, description: 1, rating: 1, link: 1, logo: 1 }))
}

const getRecognitionTools = async () => {
    return (await RecognitionTool.find({}, { title: 1, description: 1, rating: 1, link: 1, logo: 1 }))
}

router.get('/top', async (req, res) => {
    const topApps = await TopApp.find({})
    res.send(topApps)
})

router.get('/3d', async (req, res) => {
    const _3dApps = await _3dApp.find({})
    res.send(_3dApps)
})

router.get('/creation', async (req, res) => {
    const creationTools = await getCreationTools()
    if (creationTools) {
        await ApiCalls.findOneAndUpdate("/tools/creation", { $inc: { "/tools/creation": 1 } })
    }
    res.send(creationTools)
})

router.get('/recognition', async (req, res) => {
    const recognitionTools = await getRecognitionTools()
    if (recognitionTools) {
        await ApiCalls.findOneAndUpdate("/tools/recognition", { $inc: { "/tools/recognition": 1 } })
    }
    res.send(recognitionTools)
})

router.get('/apiCalls', async (req, res) => {
    const apiCalls = await ApiCalls.find({})
    res.send(apiCalls)
})

router.post('/find/:title', async (req, res) => {
    const title = req.params.title
    await ApiCalls.findOneAndUpdate("/tools/find/:title", { $inc: { "/tools/find/:title": 1 } })
    try {
        const creationTools = await CreationTool.find({ title })
        if (creationTools.length > 0)
            res.send(creationTools[0])
        else {
            const recognitionTools = await RecognitionTool.find({ title })
            if (recognitionTools.length > 0)
                res.send(recognitionTools[0])
            else
                res.send('null')
        }
    } catch (error) {
        res.send(error)
    }
})

router.get('/smart-camera', async (req, res) => {
    const apps = ['Face Recognition', 'Product Recognition', 'Security Monitor']
    await ApiCalls.findOneAndUpdate("/tools/smart-camera", { $inc: { "/tools/smart-camera": 1 } })
    const { data } = await axios.get('http://localhost:8080/api/tools/all')
    const smartCameraApps = []
    data.forEach(product => {
        apps.forEach(app => {
            if (product.title.includes(app)) {
                smartCameraApps.push(product)
            }
        })
    })
    res.send(smartCameraApps)
})


router.get('/metaverse', async (req, res) => {
    const apps = ['Face Swap', '3D Modelling', '3D Movie', 'Virtual Human']
    await ApiCalls.findOneAndUpdate("/tools/metaverse", { $inc: { "/tools/metaverse": 1 } })
    const { data } = await axios.get('http://localhost:8080/api/tools/all')
    const metaverseApps = []
    data.forEach(product => {
        apps.forEach(app => {
            if (product.title.includes(app)) {
                metaverseApps.push(product)
            }
        })
    })
    res.send(metaverseApps)
})

router.get('/commerce', async (req, res) => {
    const apps = ['Face Swap', '3D Modelling', 'Image Search']
    await ApiCalls.findOneAndUpdate("/tools/commerce", { $inc: { "/tools/commerce": 1 } })
    const { data } = await axios.get('http://localhlost:8080/api/tools/all')
    const commerceApps = []
    data.forEach(product => {
        apps.forEach(app => {
            if (product.title.includes(app)) {
                commerceApps.push(product)
            }
        })
    })
    res.send(commerceApps)
})

router.get('/entertainment', async (req, res) => {
    const apps = ['Face Swap', '3D Modelling', 'Text to Photo']
    await ApiCalls.findOneAndUpdate("/tools/entertainment", { $inc: { "/tools/entertainment": 1 } })
    const { data } = await axios.get('http://localhost:8080/api/tools/all')
    const commerceApps = []
    data.forEach(product => {
        apps.forEach(app => {
            if (product.title.includes(app)) {
                commerceApps.push(product)
            }
        })
    })
    res.send(commerceApps)
})

router.get('/all', async (req, res) => {
    let allProducts = []
    await ApiCalls.findOneAndUpdate("/tools/all", { $inc: { "/tools/all": 1 } })
    const creationTools = await getCreationTools()
    const recognitionTools = await getRecognitionTools()
    allProducts = [...creationTools, ...recognitionTools]
    res.send(allProducts)
})

router.get("/", (req, res) => {
    res.send("Sending Tool Routes")
})

export default router
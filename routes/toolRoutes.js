import express from 'express'
import _3dApp from '../models/3dAppModel.js'
import CreationTool from '../models/creationToolModel.js'
import RecognitionTool from '../models/recognitionToolModel.js'
// import ToolDetail from '../models/toolDetailModel.js'
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
    res.send(creationTools)
})

router.get('/recognition', async (req, res) => {
    const recognitionTools = await getRecognitionTools()
    res.send(recognitionTools)
})

router.post('/find/:title', async (req, res) => {
    const title = req.params.title
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

router.get('/all', async (req, res) => {
    let allProducts = []
    const creationTools = await getCreationTools()
    const recognitionTools = await getRecognitionTools()
    allProducts = [...creationTools, ...recognitionTools]
    res.send(allProducts)
})

router.get("/", (req, res) => {
    res.send("Sending Tool Routes")
})

export default router
import express from 'express'
import _3dApp from '../models/3dAppModel.js'
import CreationTool from '../models/creationToolModel.js'
import RecognitionTool from '../models/recognitionToolModel.js'
import ToolDetail from '../models/toolDetailModel.js'
import TopApp from '../models/topAppModel.js'
const router = express.Router()

router.get('/top', async (req, res) => {
    const topApps = await TopApp.find({})
    res.send(topApps)
})

router.get('/3d', async (req, res) => {
    const _3dApps = await _3dApp.find({})
    res.send(_3dApps)
})

router.get('/creation', async (req, res) => {
    const creationTools = await CreationTool.find({})
    res.send([{
        title: "3D Modelling",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor viverra sollicitudin. Pellentesque velit tellus, cursus at scelerisque nec, elementum at diam.',
        logo: '/images/creation/3D Modelling/logo.png',
        rating: 5,
        link: 'https://console.akool.com/3d'

    },])
})

router.get('/recognition', async (req, res) => {
    const recognitionTools = await RecognitionTool.find({})
    res.send(recognitionTools)
})

router.post('/find/:title', async (req, res) => {
    const title = req.params.title
    try {
        const creationTools = await ToolDetail.find({ title })
        creationTools.length > 0 ? res.send(creationTools[0]) : res.send("null")
    } catch (error) {
        res.send(error)
    }
})


router.get("/", (req, res) => {
    res.send("Sending Tool Routes")
})

export default router
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
    res.send(creationTools)
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

router.get('/all', async (req, res) => {
    let allProducts = []
    const creationTools = await CreationTool.find({})
    const recognitionTools = await RecognitionTool.find({})
    allProducts = [...creationTools, ...recognitionTools]
    res.send(allProducts)
})

router.get("/", (req, res) => {
    res.send("Sending Tool Routes")
})

export default router
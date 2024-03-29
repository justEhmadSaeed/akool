import dotenv from 'dotenv'
import CreationTool from './models/creationToolModel.js'
import RecognitionTool from './models/recognitionToolModel.js'
import TopApp from './models/topAppModel.js'
import _3dApp from './models/3dAppModel.js'
import ApiCalls from './models/apiCalls.js'
import connectDB from './config/db.js'
import { creationTools } from './data/creationTools.js'
import { recognitionTools } from './data/recognitionTools.js'
import { topApps } from './data/topApps.js'
import { _3dApps } from './data/3dApps.js'
import UserApiCall from './models/userApiCallModel.js'

dotenv.config()
connectDB()

const importData = async () => {
    try {
        await CreationTool.deleteMany()
        await RecognitionTool.deleteMany()
        await UserApiCall.deleteMany()
        // await ApiCalls.deleteMany()

        // await TopApp.deleteMany()
        // await _3dApp.deleteMany()

        await CreationTool.insertMany(creationTools)
        await RecognitionTool.insertMany(recognitionTools)
        // await ApiCalls.insertMany()
        // await TopApp.insertMany(topApps)
        // await _3dApp.insertMany(_3dApps)

        console.log('Data Imported!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        // process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await CreationTool.deleteMany()
        await RecognitionTool.deleteMany()
        await TopApp.deleteMany()
        await _3dApp.deleteMany()

        console.log('Data Destroyed!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
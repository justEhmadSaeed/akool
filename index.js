import express, { json } from 'express'
import dotenv from "dotenv"
import connectDB from './config/db.js'
import bodyparser from 'body-parser'
import toolRoutes from './routes/toolRoutes.js'
import path from 'path'
import {fileURLToPath} from 'url'
import cors from 'cors'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config();

connectDB();

const app = express()
app.use(cors());
app.use(express.static(path.join(__dirname, '/build/')))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/api/tools', toolRoutes)
app.use('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/build/index.html'))
})


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))

import mongoose from 'mongoose'

const apiCalls = mongoose.Schema(
    {
        "/tools/creation": { type: Number, default: 0 },
        "/tools/recognition": { type: Number, default: 0 },
        "/tools/smart-camera": { type: Number, default: 0 },
        "/tools/metaverse": { type: Number, default: 0 },
        "/tools/commerce": { type: Number, default: 0 },
        "/tools/entertainment": { type: Number, default: 0 },
        "/tools/all": { type: Number, default: 0 },
        "/tools/find/:title": { type: Number, default: 0 },
    }
)

const ApiCalls = mongoose.model('ApiCalls', apiCalls)

export default ApiCalls
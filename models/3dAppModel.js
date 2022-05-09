import mongoose from 'mongoose'

const _3dAppSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            default: 0,
        },
        link: {
            type: String,
            default: ''
        },
    },
    {
        timestamps: true,
    }
)

const _3dApp = mongoose.model('_3dApp', _3dAppSchema)

export default _3dApp
import mongoose from 'mongoose'

const creationToolSchema = mongoose.Schema(
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

const CreationTool = mongoose.model('CreationTool', creationToolSchema)

export default CreationTool
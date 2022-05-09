import mongoose from 'mongoose'

const topAppSchema = mongoose.Schema(
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

const TopApp = mongoose.model('TopApp', topAppSchema)

export default TopApp
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
        about: {
            type: String,
        },
        aboutImage: {
            type: String,
        },
        goal: {
            type: String,
        },
        goalImage: {
            type: String,
        },
        testimonials: [
            {
                image: { type: String },
                name: { type: String },
                description: { type: String },
                date: { type: String },
                rating: { type: Number },
            },
        ],
        faq: [
            {
                question: String,
                answer: String,
            },
        ],
        features: [
            {
                title: String,
                description: String,
            },
        ]
    },
    {
        timestamps: true,
    }
)


const CreationTool = mongoose.model('CreationTool', creationToolSchema)

export default CreationTool
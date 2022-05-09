import mongoose from 'mongoose'

const toolDetailSchema = mongoose.Schema(
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
        downloadLink: {
            type: String,
            default: ''
        },
        about: {
            type: String,
            required: true
        },
        goal: {
            type: String,
            required: true
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
        ]
    },
    {
        timestamps: true,
    }
)

const ToolDetail = mongoose.model('ToolDetail', toolDetailSchema)

export default ToolDetail
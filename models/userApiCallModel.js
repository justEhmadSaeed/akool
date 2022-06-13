import mongoose from 'mongoose'

const userApiCallSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        api: [
            {
                apiRoute: {
                    type: String,
                },
                numberOfCalls: {
                    type: Number,
                    default: 0
                },
                period: {
                    type: Number,
                    default: 0
                },
                usageAmount: {
                    type: Number,
                    default: 0
                },
                usageCost: {
                    type: Number,
                    default: 0
                }
            }
        ]
    }
)


const UserApiCall = mongoose.model('UserApiCall', userApiCallSchema)

export default UserApiCall
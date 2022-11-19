const mongoose = require('mongoose')

const designSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    url: {
        required: true,
        type: String
    },
    likes: {
        required: true,
        type: Number
    },
    dislikes: {
        required: true,
        type: Number
    },
    createdAt: {
        required: true,
        type: Date
    },
    category: {
        required: true,
        type:String
    },
    subcategory: {
        required: true,
        type:String
    },
    theme: {
        required: true,
        type: String
    },
    color: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Design', designSchema)
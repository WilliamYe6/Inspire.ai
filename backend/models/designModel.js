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
    }
})

module.exports = mongoose.model('Design', designSchema)
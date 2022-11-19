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
    createdAt: {
        required: true,
        type: Date
    }
})

module.exports = mongoose.model('Design', designSchema)
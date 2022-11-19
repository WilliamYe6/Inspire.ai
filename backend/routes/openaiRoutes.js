const express = require('express')
const Design = require('../models/designModel')
const generate = require('../generate')

// console.log(generate('red cat'))

const router = express.Router()

//Post Method
router.post('/postPrompt', async (req, res) => {
    prompt = req.body.prompt
    try{
        const urls = generate(prompt)
        res.status(200).json(urls)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports = router
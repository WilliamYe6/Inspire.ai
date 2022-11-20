const express = require('express')
const Design = require('../models/designModel')

const router = express.Router()

//Post Method
router.post('/postDesign', async (req, res) => {
    const data = new Design({
        name: req.body.name,
        url: req.body.url,
        theme: req.body.theme,
        color: req.body.color,
        category: req.body.category,
        subcategory: req.body.subcategory,
        likes: 0,
        dislikes: 0,
        createdAt: Date.now()
    })
    try{
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAllDesigns', async (req, res) => {
    try{
        const data = await Design.find().sort({'likes':1})
        // console.log(data)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/getAllDesigns_date', async (req, res) => {
    try{
        const data = await Design.find().sort({'createdAt':1})
        // console.log(data)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOneDesign/:id', async(req, res) => {
    try{
        const data = await Design.findById(req.params.id)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
    
})

//Update by ID Method
router.patch('/updateDesign/:id', async (req, res) => {
    try{
        const id = req.params.id
        const updatedData = req.body
        const options = { new: true }

        const result = await Design.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Delete by ID Method
router.delete('/deleteDesign/:id', async(req, res) => {
    try{
        const id = req.params.id
        const data = await Design.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted...`)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports = router
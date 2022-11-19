const express = require('express')
const mongoose = require('mongoose')
const designRoutes = require('./routes/designRoutes')
const openaiRoutes = require('./routes/openaiRoutes')
require('dotenv').config({path: "./config.env"})
const cors = require('cors')

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected')
})

const { Configuration, OpenAIApi } = require("openai")
require('dotenv').config({path: '../config.env'})

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generate = async (prompt) => {
    const response = await openai.createImage({
        prompt: prompt,
        n: 3,
        size: "256x256",
      });
    const images = response.data.data;
    return [images[0].url, images[1].url, images[2].url]
}

const router = express.Router()

//Post openai Method
router.post('/postPrompt', async (req, res) => {
    prompt = req.body.prompt
    try{
        const urls = await generate(prompt)
        res.status(200).json(urls)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})


const app = express()
app.use(cors())



app.use(express.json())
app.use('/api', designRoutes)
app.use('/api', router)


port = 5000

app.listen(port, (err) => {

    console.log(`server started on port ${port}`)
})







// const generate = (prompt) => {
//     return openai.createImage({
//         prompt: prompt,
//         n: 3,
//         size: "1024x1024",
//     });
// }


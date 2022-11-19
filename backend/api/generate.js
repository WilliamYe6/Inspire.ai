const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config({path: '../config.env'})

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
console.log(process.env.OPENAI_API_KEY)
const openai = new OpenAIApi(configuration);
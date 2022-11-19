const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config({path: '../config.env'})

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generate = async (prompt) => {
    const response = await openai.createImage({
        prompt: prompt,
        n: 3,
        size: "1024x1024",
      });
      images = response.data.data;
    return [images[0].url, images[1].url, images[2].url]
}

module.exports = generate;

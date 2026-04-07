const OpenAI = require("openai")

const client = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY
})

module.exports = client
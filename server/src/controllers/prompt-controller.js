const openai = require("../config/openai")

module.exports = {
  async sendText(req, res) {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: req.body.prompt
          }
        ]
      })

      return res.status(200).json({
        success: true,
        data: response.choices[0].message.content
      })

    } catch (error) {
      console.error(error)

      return res.status(500).json({
        success: false,
        error: error.message
      })
    }
  }
}
const express = require("express")
const promptController = require("../controllers/prompt-controller.js")

const routes = express.Router()

routes.post('/prompt', promptController.sendText)

module.exports = routes


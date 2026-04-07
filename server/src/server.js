require("dotenv").config() // 👈 TEM QUE SER A PRIMEIRA COISA

const app = require("./app")
const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})

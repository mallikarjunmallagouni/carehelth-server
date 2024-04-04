const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connnectDB = require('./config/db')
dotenv.config({path: "./config/config.env"})
const PORT = 3000

const app = express()
app.use(cors())

connnectDB()
app.use(express.json())

const clientDetails=require("./routes/user")
app.use(clientDetails)

app.listen(PORT,()=>{
    console.log(`you application is running on port http://localhost:${PORT}`)
})

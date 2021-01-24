const express = require("express")
const cors = require("cors")
const body = require("body-parser")
const jwt = require("jsonwebtoken")
const secret = "my-secret"
const app = express()
const PORT = 5000

app.use(cors())
app.use(body.json())
app.use(body.urlencoded({extended:true}))

app.listen(PORT, ()=> console.log(`server started on PORT ${PORT}`))
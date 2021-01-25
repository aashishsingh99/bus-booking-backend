const express = require("express")
const cors = require("cors")
const body = require("body-parser")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const secret = "my-secret"
const app = express()
const PORT = 5000
const userRoutes = require('./routes/users')

require('dotenv').config()

app.use(cors())
app.use(body.json())
app.use(body.urlencoded({extended:true}))



mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('mongoDB connected');
});

app.use('/', userRoutes)

app.listen(PORT, ()=> console.log(`server started on PORT ${PORT}`))
const express = require("express")
const cors = require("cors")
const body = require("body-parser")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const secret = "mysecret"
const app = express()
const PORT = 5000
const userRoutes = require('./routes/users')
const busRoutes = require('./routes/buses')
const bookingRoutes = require('./routes/bookings')
require('dotenv').config()

app.use(cors())
app.use(body.json())
app.use(body.urlencoded({extended:true}))



mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('mongoDB connected');
});
app.get("/",(req,res)=>{
	let status=false
	if(req.headers["authorization"])
	{
		const token=req.headers["authorization"].split(" ")[1]

		jwt.verify(token,secret,(err,data)=>{
			if(data.role)
			{
				status=true
			}
		})
	}
	res.json({status})

})
app.use('/', userRoutes)
app.use('/', busRoutes)
app.use('/',bookingRoutes)


app.listen(PORT, ()=> console.log(`server started on PORT ${PORT}`))
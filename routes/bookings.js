const express = require('express')
const { findAllBookings, mybookings, bookseat, cancelbooking } = require('../controllers/bookings')
const jwt = require("jsonwebtoken")
const secret = "mysecret"


function admin(req,res,next)
{
    let status = false
    if(req.headers["authorization"])
    {
        const token = req.headers["authorization"].split(" ")[1]
        jwt.verify(token, secret, (err, data) => {
            if(data.role === 'admin'){
                status = true
            }
        })
    }
    if(status === true)
    {
        
    }
    else{
        // res.json({status: false, data: [], error: "token error", msg: "please login"})
    }
    next()
}


function user(req,res,next)
{
	let status=false
	if(req.headers["authorization"])
	{
		const token=req.headers["authorization"].split(" ")[1]

		jwt.verify(token,secret,(err,data)=>{
            if(err)
            {
                console.log("errror hai ")
                console.log(err)
            }
			if(data.role=="user")
			{
				req.id=data.id
				status=true
			}
		})
	}

	if(status==true)
	{
		next()
	}
	else
	{
		res.json({status:false,data:[],error:"token error",msg:"kindly login to continue"})
	}
}


const router = express.Router()
router.get('/bookings',  admin, findAllBookings)
router.get('/my/bookings',  user, mybookings)
router.post('/book/seat', user, bookseat)
router.post('/cancel/booking',  user, cancelbooking)
module.exports = router


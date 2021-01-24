const User = require('../models/users')
const jwt = require('jsonwebtoken')
const secret = 'my-sceret'

function user(req,res,next)
{
    const status = false 
    if(req.headers["authorization"])
    {
        const token = req.headers["authorization"].split(" ")[1]
        jwt.verify(token, secret, (err,data) => {
            if(data.role == "user")
            {
                req.id = data.id 
                status = true 
            }
        })
    }

    if(status === true)
    {
        next()
    }
    else{
        res.json({status: false, data: [], error: "token error", msg: "please login"})
    }
}

function admin(req,res,next)
{
    const status = false
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
        next()
    }
    else{
        res.json({status: false, data: [], error: "token error", msg: "please login"})
    }
}
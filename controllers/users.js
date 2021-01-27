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



module.exports.login = (req,res) => {
    const {email, password} = req.body;
    User.find({},function(err,data){
        if(err){
            return res.json({error:err, data:[], msg: "ran into problem", status: false})
        }

        if(data.some(x=>x.email===email && x.password === password))
        {
            const user = data.find(x=>x.email === email && x.password === password)
            jwt.sign({id: user.id, role: "user"}, secret, (error,token) => {
                if(err){
                    return res.json({error: error, data:[], msg: "some problems" ,status:false})
                }
                res.json({error:"", data: {name:user.name, token}, msg: "user login success", status: true})
            })

        }
        else{
            res.json({error: "user not found", data: [], msg: "unable to find user", status: false})
        }

    })
}

module.exports.adminlogin = (req,res) => {
    const {email,password}=req.body

	if(email=='admin@gmail.com' && password=="admin")
	{
		const user=req.body
		jwt.sign({email:email},secret,(error,token)=>{
			if(err){return res.json({error:error,data:[],msg:"too many requests in token generation",status:false})}
			res.json({error:"",data:{role:"admin",name:"admin",token},msg:"admin login success",status:true})	
		})
	}
	else
	{
		res.json({error:"admin not found",data:[],msg:"unable to find admin",status:false})
	}
}



module.exports.signup = (req,res) => {

    const {name ,email, password, phone, } = req.body 
    const user = new User({ name,email, password, phone })
    User.find({}, function(err,data){
        if(err){
            return res.json({ error:err, data:[], msg: "some problems", status: false })
        }
        if(data.some(x => x.email === email))
        {
            res.json({error:err, data: [], msg: "email already exists", status:false })
        }
        else{
            user.save(function(errors){
                if(errors)
                {
                    res.json({error:errors,data:[],msg:"ran into problem",status:false}) 
                }
                res.json({error:"",data:[],msg:"user signup success",status:true})
            })
        }
    })
}

module.exports.getusers = (req,res) =>{
    User.find(function(err,data){

        if(err)
        {
            return res.json({error:err,data:[],msg:"ran into problem",status:false})
        }
        res.json({error:"",data,msg:"users loaded from api",status:true})
    })
}








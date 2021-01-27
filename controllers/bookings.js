const Bookings = require('../models/Bookings')
const jwt = require('jsonwebtoken')
const secret = 'my-sceret'

module.exports.findAllBookings = (req,res)=>{

    Bookings.find(function(err,data){
		if(err){return res.json({error:err,data:[],msg:"ran into problem",status:false})}
		res.json({error:"",data,msg:"bookings loaded from api",status:true})			
	})

}

module.exports.mybookings = (req,res) => {
    
    let userid=req.id
	Bookings.find(function(err,data){
		if(err){return res.json({error:err,data:[],msg:"ran into problem",status:false})}

		let a=data.filter(x=>x.userid===userid)

		res.json({error:"",data:a,msg:"loading only booking s of all users",status:true})				
	})


}

module.exports.bookseat = (req,res) => {
    let booking=new Bookings({
		userid:req.id,
		busid:req.body.bid,
		seatid:req.body.sid,
	})


	booking.save(function(err,data){
		if(err){return res.json({error:err,data:[],msg:"ran into problem",status:false})}
		res.json({error:"",data,msg:"booking done",status:true})				
	})

}

module.exports.cancelbooking = (req,res) => {

    Bookings.findByIdAndDelete(req.body.id,function(err,data){
		if(err){return res.json({error:err,data:[],msg:"ran into problem",status:false})}
		res.json({error:"",data:data,msg:"booking cancelled",status:true})						
	})
}




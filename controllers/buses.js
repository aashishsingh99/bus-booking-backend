const Bus = require('../models/buses')
const jwt = require('jsonwebtoken')
const secret = 'my-sceret'

module.exports.getBuses = (req,res) => {
    Bus.find({}, function(data,err) {
        if(err){return res.json({error:err,data:[],msg:"ran into problem",status:false})}
        res.json(data)
    })
}

module.exports.postBuses = (req,res) => {
    
    const { bus_title, 
        bus_route, 
        bus_starttime, 
        bus_endtime, 
        bus_hours, 
        bus_from, 
        bus_to } = req.body 
    const bus = new Bus({ bus_title, 
        bus_route, 
        bus_starttime, 
        bus_endtime, 
        bus_hours, 
        bus_from, 
        bus_to })
    bus.save(req.body, function(err,data) {
        if(err){return res.json({error:err,data:[],msg:"ran into problem",status:false})}
        res.json(data)
    })
}
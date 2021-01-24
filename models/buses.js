const mongoose = require('mongoose')
const busSchema = new mongoose.Schema({
    bus_title: String, 
    bus_route: String, 
    bus_starttime: String, 
    bus_endtime: String, 
    bus_hours: String, 
    bus_from: String, 
    bus_to: String,  
})
const Buses = new mongoose.model("Buses" ,busSchema)
module.exports = Buses
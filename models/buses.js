const mongoose = require('mongoose')
const busSchema = new mongoose.Schema({
    bus_title: String, 
    bus_route: String, 
    bus_starttime: String, 
    bus_endtime: String, 
    bus_hours: String, 
    bus_from: String, 
    bus_to: String,  
    photo: String,
})
const Bus = new mongoose.model("Bus" ,busSchema);
module.exports = Bus;


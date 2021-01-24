const mongoose = require('mongoose')

const bookingsSchema = new mongoose.Schema({
    userid : String, 
    busid: String, 
    seatid: String,
})

const Bookings = new mongoose.model("Bookings", bookingsSchema);
module.exports = Bookings
const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    phone: String, 
    password: String,

})

const User = new mongoose.model("User", usersSchema);

module.exports = User;
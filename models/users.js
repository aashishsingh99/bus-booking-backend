const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    phone: String, 
    password: String,

})

const Users = new mongoose.model("Users", usersSchema);

module.exports = User;
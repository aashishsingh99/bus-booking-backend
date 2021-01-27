const express = require('express')
const { login, signup, adminlogin, getusers } = require('../controllers/users')


const router = express.Router()
router.post('/login', adminlogin)
router.post('/signup', signup)
router.post('/login/admin', adminlogin)
router.get('/users', getusers)
module.exports = router
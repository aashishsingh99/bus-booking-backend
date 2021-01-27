const express = require('express')
const { findAllBookings, mybookings, bookseat, cancelbooking } = require('../controllers/bookings')


const router = express.Router()
router.get('/bookings', findAllBookings)
router.get('/my/bookings', mybookings)
router.post('/book/seat', bookseat)
router.post('/cancel/booking', cancelbooking)
module.exports = router
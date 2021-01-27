const express = require('express')
const { getBuses, postBuses, createseat, seatinfo } = require('../controllers/buses')


const router = express.Router()
router.get('/buses', getBuses)
router.post('/buses', postBuses)
router.post('seat/info',seatinfo)
router.post('/seat/create',createseat)
module.exports = router
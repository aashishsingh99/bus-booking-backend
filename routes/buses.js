const express = require('express')
const { getBuses, postBuses } = require('../controllers/buses')


const router = express.Router()
router.get('/buses', getBuses)
router.post('/buses', postBuses)

module.exports = router
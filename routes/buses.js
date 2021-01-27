const express = require('express')
const { getBuses, postBuses, createseat, seatinfo } = require('../controllers/buses')

function admin(req,res,next)
{
    let status = false
    if(req.headers["authorization"])
    {
        const token = req.headers["authorization"].split(" ")[1]
        jwt.verify(token, secret, (err, data) => {
            if(data.role === 'admin'){
                status = true
            }
        })
    }
    if(status === true)
    {
        
    }
    else{
        // res.json({status: false, data: [], error: "token error", msg: "please login"})
    }
    next()
}

const router = express.Router()
router.get('/buses', getBuses)
router.post('/buses', admin, postBuses)
router.post('seat/info', seatinfo)
router.post('/seat/create', createseat)
module.exports = router
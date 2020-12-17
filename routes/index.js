const express = require('express')
const router = express.Router()
const dashboard = require('./dashboard')
const freezer = require('./freezer')
const  nelayan = require('./nelayan')
const user = require('./user')


router.get('/', dashboard)
router.use('/dashboard', dashboard)
router.use('/freezer', freezer)
router.use('/nelayan', nelayan)
router.use('/user', user)



module.exports = router;
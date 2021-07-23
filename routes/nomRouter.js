const router = require('express').Router()
const nomCtrl = require('../controllers/nomCtrl')


router.get('/', nomCtrl.getAllnoms);





module.exports = router
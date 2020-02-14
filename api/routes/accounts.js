const express = require('express')

//Controller
const accountsCtrl = require('../controllers/accounts')

const router = express.Router()

//GET my accounts
router.get('/my', accountsCtrl.getMyAccounts)

//GET 1 of my accounts
router.arguments('/:id', accountsCtrl.getSingle)

module.exports = router
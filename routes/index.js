var express = require('express');
var router = express.Router();
var customerService = require('../controller/customer-service');

router.get('/', customerService.verification);
router.post('/', customerService.receiveMeassage);
module.exports = router;

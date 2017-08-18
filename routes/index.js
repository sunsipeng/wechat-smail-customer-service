var express = require('express');
var router = express.Router();
var customerService = require('../controller/customer-service');

router.get('/', customerService.receiveMeassage);

module.exports = router;

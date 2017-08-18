var express = require('express');
var router = express.Router();
var customerService = require('../controller/customer-service');

router.get('/', customerService.verification);
router.post('/', customerService.receiveMeassage);
router.get('/sha1', customerService.sha1);
module.exports = router;

const express = require('express');
const router = express.Router();
const controller = require('../Controller/new');

router.get('/shoes',controller.getallshoes);
router.get('/shoe/:category',controller.getshoesbyname);
module.exports = router;
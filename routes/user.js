const express = require('express');
const router = express.Router();

const {getUser} = require('../controller/Auth');

router.post('/signup', getUser);

module.exports = router;
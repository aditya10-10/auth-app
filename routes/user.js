const express = require('express');
const router = express.Router();

const {getUser, login} = require('../controller/Auth');

router.post('/signup', getUser);
router.post('/login', login);

module.exports = router;
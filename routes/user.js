const express = require('express');
const router = express.Router();
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken} = require("../utils/generateToken");
const {registerUser} = require("../controllers/userController");
const {loginUser} = require("../controllers/userController");
router.get('/', function(req, res){
    res.render('index');
})

router.post('/register',registerUser);
router.post('/login',loginUser);

module.exports = router;
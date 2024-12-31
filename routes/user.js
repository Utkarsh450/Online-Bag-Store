const express = require('express');
const router = express.Router();
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken} = require("../utils/generateToken");
const {registerUser} = require("../controllers/userController");
const {loginUser} = require("../controllers/userController");
const {logoutUser} = require("../controllers/userController");
router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/logout',logoutUser);

module.exports = router;
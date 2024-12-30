const express = require('express');
const router = express.Router();
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.get('/', function(req, res){
    res.render('index');
})

router.post('/register',async function(req, res){
    let {fullname,email,password} = req.body;
    let salt = bcrypt.genSalt(10);
    let hash = bcrypt.hash(password,salt);
    let users = await userModel.create({
        fullname,
        email,
        password:hash,
    })
    let token = jwt.sign({email:email, id:users._id},process.env.JWT_KEY,{expiresIn:'1h'});
    res.cookie("token",token);
    res.send("")
})

module.exports = router;
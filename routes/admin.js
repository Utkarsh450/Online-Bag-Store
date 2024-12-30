const express = require('express');
const router = express.Router();
const adminModel = require("../models/admin");

if(process.env.NODE_ENV !== 'production'){
    router.get("/create",async (req,res)=>{
        let {fullname,email,password} = req.body;
        let owners = await adminModel.find();
        if(owners.length > 0)
            return res.statusCode(503).send("You are not allowed to create a new owner.");

        let admin = await adminModel.create({
            fullname,
            email,
            password,
        })
    res.send(admin);
    })
}

module.exports = router;
const express = require('express');
const router = express.Router();
const upload = require("../config/multer");
const productModel = require("../models/products");

router.post('/create',upload.single("image"), async function(req, res){
    try{let {name,price,discount,bgcolor,panelcolor,textcolor} = req.body;
    let product = await productModel.create({
        name,
        price,
        discount,
        bgcolor,
        panelcolor,
        textcolor,
        image: req.file.buffer,
    })
    req.flash("success","product created successfully")
res.redirect("/owners/admin");
    }catch(error){
        res.status(500).json({success:false,message:error.message});
    }
});

module.exports = router; 
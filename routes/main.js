const express = require('express');
const isLoggedin = require('../middlewares/isLoggedin');
const productModel = require('../models/products');
const router = express.Router();

router.get("/",(req,res)=>{
    let error =  req.flash("error");
    res.render("index", {error});
});

router.get("/shop", isLoggedin,async(req,res)=>{
    let products = await productModel.find();
    res.render("shop", {products});
});

module.exports = router;
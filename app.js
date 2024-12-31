const express = require('express');
const app = express();
require("dotenv").config();
const path = require("path");
const cookieParser = require('cookie-parser');
const expressSession = require("express-session");
const flash = require("connect-flash");
const db = require("./config/mongoose");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const productsRouter = require("./routes/products");
const mainRouter = require("./routes/main");
db();



app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.set("view engine","ejs");
app.use(cookieParser());
app.use(flash());
app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(express.static(path.join(__dirname,'public')));
app.use("/",mainRouter);
app.use("/owners",adminRouter);
app.use("/users",userRouter);
app.use("/products",productsRouter);

app.listen(3000);
const express = require('express');
const app = express();
const path = require("path");
const cookieParser = require('cookie-parser');
require("dotenv").config();
const db = require("./config/mongoose");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const productsRouter = require("./routes/products");
db();



app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.set("view engine","ejs");
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
app.use("/admin",adminRouter);
app.use("/users",userRouter);
app.use("/products",productsRouter);

app.listen(3000);
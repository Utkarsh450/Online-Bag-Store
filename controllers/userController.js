const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async function (req, res) {
    try {
        const { fullname, email, password } = req.body;

        // Validate required fields
        if (!fullname || !email || !password) {
            return res.status(400).json({ 
                success: false, 
                message: "Fullname, email, and password are required." 
            });
        }

        // Check if email is already registered
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ 
                success: false, 
                message: "Email is already in use." 
            });
        }

        // Hash password directly (no need to store salt explicitly)
        const hash = await bcrypt.hash(password, 10);

        // Create user in the database
        const user = await userModel.create({
            fullname,
            email,
            password: hash,
        });

        // Generate a token for the user
        const token = generateToken(user);
        res.redirect("/shop");

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports.loginUser = async (req,res)=>{
    const {email, password} = req.body;

    let user = await userModel.findOne({email:email});

    if(!user){
        return res.status(400).json({success:false,message:"Invalid email or password."});
        
    }
 user = await bcrypt.compare(password,user.password);

if(!user){
    return res.status(400).json({success:false,message:"Invalid email or password."});
}

let token = generateToken(user);

res.cookie("token",token,{
    httpOnly:true,
     secure:true
    });

    res.redirect("/shop");

}

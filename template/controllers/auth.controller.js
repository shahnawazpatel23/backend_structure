const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

async function register(req,res){
    try {
        const {username, password, role} = req.body;
        const hashedpass = await bcrypt.hash(password,10)
        const newUser = new User({username,password:hashedpass,role
        })
        await newUser.save();
    
        res.status(201).json({message: "User registered successfully"})
    } catch (error) {
        res.status(500).json({message: "User not registered "})
    }
}

async function login(req,res){
    try {
        const {username,password} =req.body;
        const user = userModel.findOne({username})
        if(!user){
            res.status(404).json({message:"user not found"})
        }
        const isPassCorrect = await bcrypt.compare(password,user.password);
        if(!isPassCorrect){
            res.status(400).json({message:"Password doesn't match"})
        }
        const token = jwt.sign(
            {id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn: "5h"}

        )
        res.status(200).json({message:"login successful"})
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

module.exports = {
    register,
    login
}
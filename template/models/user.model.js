const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true,
        enum:['role1','role2','role3']
    },
},{timestamps:true}
)

const userModel = mongoose.model("user",userSchema)

module.exports = userModel
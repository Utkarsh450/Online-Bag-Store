const mongoose  =require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cart:{
        type: Array,
        default: []
    },
        orders:{
        type: Array,
        default: []
    },
    contact:Number,
    picture:String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date
    }
})

module.exports = mongoose.model("user",userSchema);
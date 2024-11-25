const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    username: {
        type: String,
        minLength:3,
        trim:true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    products:{
        type:Array,
        default: [],
    },
    picture:{
        type:String,
        default: 'default_admin.jpg'
    },
    gstin:{
        typr:String,
    }
})

module.exports = mongoose.model('admin', adminSchema);
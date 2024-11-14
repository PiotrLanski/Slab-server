const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    nickname: {type:String, unique: true, required:true},
    name: {type:String},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    avatar: {type: String, default:"https://via.placeholder.com/150"},
    belay: {type: Boolean, default: false},
    gender: {type: String, enum: ['male', 'female', 'other']},
    role: {type: String, enum: ['admin', 'user', 'superadmin'], default: 'user'},
    createdAt: {type: Date, default: Date.now}
});



module.exports = mongoose.model('User', userSchema);
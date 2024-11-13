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

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('User', userSchema);
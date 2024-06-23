const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
        firstname: {
            type: String,
            minlength:3,
            required:[true, `Firstname is required`]
        },
        lastname: {
            type: String,
            minlength:3,
            required:[true, `Lastname is required`]
        },
        email: {
            type: String,
            unique: [true, `Email already registered`],
            required: [true, `Email is required`]
        },
        password: {
            type: String,
            required: [true, `Password is required`],
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Others'],
            required: [true, `Gender is required`],
        }
});

module.exports = mongoose.model('User', UserSchema);
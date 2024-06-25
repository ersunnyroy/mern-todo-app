require('dotenv').config();
const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// all function related to user

const createUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password, gender } = req.body;
        // hased password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            firstname,
            lastname,
            email,
            gender,
            password: hashedPassword
        });

        res.status(200).send({ status: true, message: `Your are successfully registered` });

    } catch (err) {
        res.status(500).send({ status: false, error_message: err.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const passwordMatched = await bcrypt.compare(password, user.password);
        if (!passwordMatched) return res.status(403).send({ status: false, message: `Invalid Credentials` });

        const userInfo = {
            _id: user._id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            fullname: `${user.firstname} ${user.lastname}`
        }

        const token = jwt.sign({user: userInfo}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' });
        return res.status(200).send({ status: true, accessToken: token });

    } catch (err) {
        return res.status(500).send({ status: false, error_message: err.message });
    }
}

module.exports = { createUser, login};
require('dotenv').config();
const mongoose = require('mongoose');

const dbConnect = async (req, res) => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
    } catch (err) {
        return res.status(500).send({ status:false, error_message: err.message });
    }
}

module.exports = dbConnect;
require('dotenv').config();
const mongoose = require('mongoose');
const dbConnect = require('./config/dbCon');
const express = require('express');
const app = express();

// init db connection
dbConnect();

const PORT = process.env.PORT || 3500;

// once db connection is intialized start app
mongoose.connection.on('open', () => {
    console.log('DB Connected');
    app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
})


// Additional error handling for mongoose connection
mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
});


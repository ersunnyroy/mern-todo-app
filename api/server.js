require('dotenv').config();
const mongoose = require('mongoose');
const dbConnect = require('./config/dbCon');
const express = require('express');
const app = express();
const cors = require('cors');

// routes import
const UserRoutes = require('./routes/UserRoutes');

//config
const { corsOptions } = require('./config/corsOption');


// init db connection
dbConnect();

const PORT = process.env.PORT || 3500;


// inbuilt middleware
app.use(cors(corsOptions));
app.use(express.json());



// once db connection is intialized start app
mongoose.connection.on('open', () => {
    console.log('DB Connected');
    app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
})


// Additional error handling for mongoose connection
mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
});


// defined routes
app.use('/api/v1', UserRoutes);

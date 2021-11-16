const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();

// Logs requests to terminal
app.use(logger('dev'));

// Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(require('./routes'));

// Connect to mongoose database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
});


app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
});


const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
// const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));
app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});


app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
});


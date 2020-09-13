const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('using express');
    next();
});


app.use((req, res, next) => {
    
    console.log('using express');
    res.send('Hello from Express');
});

module.exports = app;
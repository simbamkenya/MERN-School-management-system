const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/sms', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex : true
}).then(()=>console.log("connected to MongoDB"))

module.exports = db;

const mongoose = require('mongoose');
const SubjectSchema = new mongoose.Schema({
    subjectName : {
        type: String,
        min: 3
    }
});

const subject = mongoose.model('Subject', SubjectSchema)
module.exports = subject;
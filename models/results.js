const mongoose = require('mongoose');


const studentScoreSchema = new mongoose.Schema({
    studentScore: {
        type: Number
    },
    subject : {
        type: Schema.Types.ObjectId,
        ref: "Subject"
    }
});


const ResultsSchema = new mongoose.Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student"
    },
    studentResults: [{
        singleScore: studentScoreSchema
    }], 
    exam: {
        type: Schema.Types.ObjectId,
        ref: "exam"
    }
});
const results = mongoose.model('Results', ResultsSchema);
module.exports = results;
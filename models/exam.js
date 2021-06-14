const mongoose = require('mongoose');
const ExamSchema = new mongoose({
    examName: {
        type: String
    },
    maximumScore: {
        type: Number
    }
});
const exam = mongoose.model('Exam', ExamSchema);
module.exports = exam;
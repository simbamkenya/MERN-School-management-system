const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StudentSchema = new mongoose.Schema({
    surName: {
        type: String,
        required: true,
        min: 3
    },
    // firstName: {
    //     type: String,
    //     required: true,
    //     min: 3
    // },
    // lastName: {
    //     type: String,
    //     required: true,
    //     min: 3
    // },
    // dateOfBirth: {
    //     type: Date, 
    //     required: true
    // },
    // gender: {
    //     type: String,
    //     enum: ["male", "femaie"]
    // },
    // admissionNo: {
    //     type: Number,
    //     required: true
    // },
    results: {
        type: Schema.Types.ObjectId,
        ref: "Results"
    }


});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
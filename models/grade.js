const mongoose= require('mongoose');

const GradeSchema = new mongoose.Schema({
  gradeName: {
      type: String,
      required: true,
      min: 3
  }, 
  students: [{
    type: Schema.Types.ObjectId,
    ref: "Student"
  }]
});
const grade = mongoose.model('Grade', GradeSchema)
module.exports = grade;
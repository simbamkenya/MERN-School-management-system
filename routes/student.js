const express = require('express');
const router = express.Router();
const Student = require('../models/student');



router.get('/', (req, res)=>{

    // const students = [{
    //     student1: "simba",
    //     student2 : "lion"
    // }]

    // function fetchStudents(){
    //     res.send(students[0])
    // }
    // // fetchStudents()
    // res.send({name : "josh"})
    // console.log('Running on router')
})

router.post('/add', (req, res)=>{
   const student = new Student({
       surName : req.body.surName
   })
   return student.save()
  
})

module.exports = router;

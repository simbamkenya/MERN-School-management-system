const express = require('express');
const router = express.Router()

router.get('/',(req, res)=>{

    const students = [{
        student1: "simba",
        student2 : "lion"
    }]

    function fetchStudents(){
        res.send(students[0])
    }
    fetchStudents()
    console.log('Running on router')
})

module.exports = router;

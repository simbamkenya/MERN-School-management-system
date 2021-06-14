const express = require('express');
const router = express.Router();
const Results = require('../models/results');

router.get('/', (req, res)=>{
    res.send({name:"hhhhuuu"})
});

router.post('/add', (req, res)=>{
    const student = {
        
    }
    res.send({name:"9999"})
});
module.exports = router;
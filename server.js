const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const db = require('./db/db')
let PORT =process.env.PORT || 3000;
const studentRoute = require('./routes/student')
const resultsRoute = require('./routes/result')


app.use('/api/students', studentRoute)
app.use('/api/results', resultsRoute)

app.get('/', (req, res)=>{
    console.log("You home") 
       
})



app.listen(PORT, ()=>{
    console.log(`app is running on ${PORT}`)
});
//E -Express on Nodejs

const express = require('express');
const cors =require('cors');
const app = express()

app.use(cors())//cors is a middleware (get response and send it other port)
app.use(express.json())

app.post('/api/register',(req,res)=>{
    console.log(req.body)
    res.json({status:'User has been Registered'})
})

app.listen(1337, () => {
    console.log("Server is Running at:");
    console.log("http://localhost:1337/")
})
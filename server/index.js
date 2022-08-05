//E -Express on Nodejs
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const User = require('./modles/user.modle')
app.use(cors())//cors is a middleware (get response and send it other port)
app.use(express.json())


// const CONNECTION_URL = 'mongodb+srv://hdrali036:abcde247@cluster0.0ye8u.mongodb.net/?retryWrites=true&w=majority';
// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connect('mongodb://localhost:27017/mern-authentication')

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        })

        console.log("Response", res);
        res.json({ status: 'User has been Registered' })
    } catch (error) {
        res.json({ status: 'Error', error })
    }
})
app.post('/api/login', async (req, res) => {

    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    if (user) {
        res.json({ status: 'ok', user: true })
    }
    else {
        res.json({ status: 'error', user: false })

    }

})


app.listen(1337, () => {
    console.log("Server is Running at:");
    console.log("http://localhost:1337/mern-authentications")
})
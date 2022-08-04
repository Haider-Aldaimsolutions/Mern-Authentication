//E -Express

const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send("hello server")
})

app.listen(1337, () => {
    console.log("Server Running on 1337")
})
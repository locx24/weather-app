var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var cityName = document.querySelector('.cityName');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())

app.get('/weatherApp/:query',async (req, res) =>{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appKey=myKey`)
res.json(response.data.hits)
//console.log(response.data.hits) 

})

app.listen(PORT,() => console.log(`Server is listening on ${PORT}`))

const express = require("express");
const weatherApp = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(5000, function () {
    console.log("Server is running on localhost3000");
});

   

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
const port = 3000;

app.use( bodyParser.json());

app.use( bodyParser.urlencoded({extended: true}));

app.use(cors());

const chatBotResponse = {
    "hello" : "How are you",
    "hey" : "Whats Up",
    "what's the time" : new Date().toTimeString(),
    "what's the date": new Date().toDateString()
}

app.get('/input', (req,res) => {
  res.send('Welcome')
})

app.post('/input', (req, res) => {

    userInput = req.body.input.toLowerCase();
    console.log(chatBotResponse[userInput])
    res.send("Welcome")
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})


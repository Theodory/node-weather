//const request = require('request')
const express = require('express')
const argv = require('yargs').argv
const app = express()
app.set('view engine', 'ejs')

const port = 3000

let apiKey = 'bead33159d7b031b258326b1543c13a6';
let city = argv.anotherCity ||'Dar es salaam';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

// request.get('/',(err,response,body)=>{
// 	if(err){
// 		console.log(error);
// 	}else{
// 		let data = JSON.parse(body);
// 		let textMessage = `Here at ${data.name } weather is ${data.main.temp}`
// 		console.log(textMessage);
// 	}
// })

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
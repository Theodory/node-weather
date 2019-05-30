const request = require('request')
const argv = require('yargs').argv
const http = require('http')

let apiKey = 'bead33159d7b031b258326b1543c13a6';
let city = argv.anotherCity ||'Dar es salaam';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request.get(url,(err,response,body)=>{
	if(err){
		console.log(error);
	}else{
		let data = JSON.parse(body);
		let textMessage = `Here at ${data.name } weather is ${data.main.temp}`
		console.log(textMessage);
	}
})
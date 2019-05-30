const request = require('request')
const http = require('http')

let apiKey = 'bead33159d7b031b258326b1543c13a6';
let city = 'Dar es salaam';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request.get(url,(err,response,body)=>{
	if(error){
		console.log(error);
	}else{
		console.log(body);
	}
})
const request = require('request')
const express = require('express')
const argv = require('yargs').argv
const app = express()
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));


const port = 3000

let apiKey = 'bead33159d7b031b258326b1543c13a6';
let city = argv.anotherCity ||'Dar es salaam';

app.get('/', function (req, res) {
  res.render('index');
})

app.post('/', function (req, res) {
	let form = req.body.city
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${form}&appid=${apiKey}`

	request(url,(err,response,body) => {
		let data = JSON.parse(body)
		let textMessage = `Here at ${data.name } weather is ${data.main.temp}`
		res.render('index',{weather: textMessage});
	})
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
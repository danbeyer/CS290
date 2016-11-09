// Author: Daniel Beyer
// CS290 - Week 6
// Date 11/6/16

var apiKey = 'fa7d80c48643dfadde2cced1b1be6ca1';

document.addEventListener('DOMContentLoaded', bindWeatherButton);
document.addEventListener('DOMContentLoaded', bindPOSTButton);

function bindWeatherButton(){
	document.getElementById('submitData').addEventListener('click', function(event) {
		var req = new XMLHttpRequest();
		var cityName = document.getElementById('city').value;
		var zipCode = document.getElementById('zipCode').value;
		if(cityName == "") {
			req.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip="+zipCode+",us&appid="+apiKey, true);
			
		}
		else {
			req.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip="+cityName+"&appid="+apiKey, true);
			
		}
		req.addEventListener('load', function(){
			if(req.status>= 200 && req.status<400){
				var response = JSON.parse(req.responseText);
				console.log(JSON.parse(req.responseText));
				document.getElementById('cityName').textContent = response.name;
				document.getElementById('temp').textContent = response.main.temp;
				document.getElementById('humidity').textContent = response.main.humidity;
				document.getElementById('wind').textContent = response.wind.speed;
			}
			else {
				console.log("Error in network request: " + request.statusText);
			}
	});
		req.send(null);

		event.preventDefault();
	});
}

function bindPOSTButton(){
	document.getElementById('textSubmit').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		var payload = document.getElementById('submitText').value;
		req.open('POST', 'http://httpbin.org/post', true);
		req.setRequestHeader('Content-Type', 'application/json');
		req.addEventListener('load', function(){
			if(req.status >= 200 && req.status <400) {
				var response = JSON.parse(req.responseText);
				document.getElementById('JSONresponse').textContent = response.data;
			} else {
				console.log("Error in network request:" + req.statusText);
		}});
		req.send(JSON.stringify(payload));
		event.preventDefault();
		
	});
}
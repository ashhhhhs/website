// Name: Juja Manandhar
// University ID: 2226701

function call_weather(){
	console.log(Date.now());
	if(localStorage.when != null
		&& parseInt(localStorage.when) + 10000 > Date.now()) {
						console.log("JJ");
		let city = document.querySelector(".city");
		let description = document.querySelector(".description");
		let temp = document.querySelector(".temp");
		let humidity = document.querySelector(".humidity");
		let wind = document.querySelector(".wind")
		let pressure = document.querySelector(".pressure");

			let freshness = Math.round((Date.now() - localStorage.when)/1000) + " second(s)";
			// document.getElementById("description").innerHTML = localStorage.myWeather;
			// document.getElementById("myTemperature").innerHTML = localStorage.myTemperature;
			// document.getElementById("myLastUpdated").innerHTML = freshness;
			// No local cache, access network

				city.textContent = 'Weather in '+ localStorage.city;
				wind.textContent = 'Windspeed: '+ localStorage.weather_wind + 'km/hr';
				temp.textContent = localStorage.weather_temperature+'°C';
				humidity.textContent = 'Humidity: ' + localStorage.weather_humidity + '%';
				description.textContent = localStorage.weather_description;
				pressure.textContent = 'Pressure: '+ localStorage.weather_pressure + ' '+ 'hPa';
		}
	else{
		console.log("K");
			let city = document.querySelector(".city");
			let description = document.querySelector(".description");
			let temp = document.querySelector(".temp");
			let humidity = document.querySelector(".humidity");
			let wind = document.querySelector(".wind")
			let pressure = document.querySelector(".pressure");
			var city_name = document.getElementById("city_name").value;
			if (!city_name){
				city_name = 'Charnwood District'
			}
			apidata = 'http://localhost/Prototype2/my-api.php?city='+city_name;
			fetch(apidata).then((myrecievedata) => {
				return myrecievedata.json()
			}).then((mydata) => {
				console.log(mydata);
				localStorage.weather_description = mydata.weather_description;
				localStorage.weather_city = mydata.city;
				localStorage.weather_wind = mydata.weather_wind;
				localStorage.weather_temperature = mydata.weather_temperature;
				localStorage.weather_humidity = mydata.weather_humidity;
				localStorage.weather_pressure =  mydata.weather_pressure;

				city.textContent = 'Weather in '+ mydata.city;
				wind.textContent = 'Windspeed: '+ mydata.weather_wind + 'km/hr';
				temp.textContent = mydata.weather_temperature+'°C';
				humidity.textContent = 'Humidity: ' + mydata.weather_humidity + '%';
				description.textContent = mydata.weather_description;
				pressure.textContent = 'Pressure: '+ mydata.weather_pressure + ' '+ 'hPa';
			});
		}
}

function pageload(){
	call_weather();
	get_time();
}

function get_time(){
	let date = document.querySelector(".date");

	var theDate = new Date();
    var dateString = theDate.toLocaleString('en-US', { timeZone: 'Europe/London' });
    var dateArray = dateString.split(',');
    // console.log(dateArray);
    date.textContent = dateArray[0];
}





// } else {
// // Fetch weather data from API for given city
// fetch('https:/localhost/my-api.php?city=Wolverhampton')
// // Convert response string to json object
// .then(response => response.json())
// .then(response => {
// // Copy one element of response to our HTML paragraph
// city.textContent = 'Weather in '+ response.city;
// wind.textContent = 'Windspeed: '+ response.weather_wind + 'km/hr';
// temp.textContent = response.weather_temperature+'°C';
// humidity.textContent = 'Humidity: ' + response.weather_humidity + '%';
// description.textContent = response.weather_description;
// pressure.textContent = 'Pressure: '+ response.weather_pressure + ' '+ 'hPa';

// // document.getElementById("myWeather").innerHTML = response.weather_description;
// // document.getElementById("myTemperature").innerHTML = response.weather_temperature;
// // document.getElementById("myLastUpdated").innerHTML = response.weather_when;

// // Save new data to browser, with new timestamp
// localStorage.myWeather = response.weather_description;
// localStorage.myTemperature = response.weather_temperature + '°';
// localStorage.when = Date.now(); // milliseconds since January 1 1970
// })
// .catch(err => {
// // Display errors in console
// console.log(err);
// });
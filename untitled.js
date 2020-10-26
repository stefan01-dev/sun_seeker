fetch('http://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=paris')
	.then(resp => resp.json())
	.then(data => console.log(data.main.temp))
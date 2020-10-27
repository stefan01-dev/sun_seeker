fetch('http://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=paris')
	.then(resp => resp.json())
	.then(data => console.log(data.main.temp))

const urls = [
'http://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=paris',
'http://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=berlin',
'http://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=bucharest'
]
Promise.all(urls.map(url => {
	return fetch(url).then(resp => resp.json())
})).then(results => {
	console.log(results[0].name)
	console.log(results[1].main.temp)
	console.log(results[2].main.temp)
}).catch(() => console.log('something went wrong'))
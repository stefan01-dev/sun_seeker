import React from 'react';


fetch('http://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=paris')
	.then(resp => resp.json())
	.then(data => console.log(data.main.temp))



const urls = [
'https://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=paris',
'https://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=berlin',
'https://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=bucharest'
]

Promise.all(urls.map(url => {
	return fetch(url).then(resp => resp.json())
})).then(results => {
	console.log(results[0].name)
	console.log(results[1].main.temp)
	console.log(results[2].main.temp)
}).catch(() => console.log('something went wrong'))


const getWeather = () => {
  return(
// this works, got to run in in chrome console
var array = [
Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
  //Returns the name of the city
    console.log(results[2].name)
    return results[0]
}).catch(() => console.log('something went wrong'))
];
console.log(array)
  )
}

// got to convert data from JSON to assing it to a variable, for ex. temp location etc.
var json = JSON.stringify(urls[2]);
console.log(json);


const getGitHubUserWithFetch = async () => {
  const response = await fetch(urls[1]);
  const jsonData = await response.json();
  console.log(jsonData);
};

console.log(getGitHubUserWithFetch);

export default getWeather;

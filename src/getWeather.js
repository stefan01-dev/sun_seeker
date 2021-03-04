// //import React from 'react';

// var getWeather = new XMLHttpRequest();
// getWeather.onreadystatechange = function() {
//   if (this.readyState === 4 && this.status === 200) {
//     var myObj = JSON.parse(this.responseText);
//     document.getElementById("cityName").innerHTML = myObj.name;
//     document.getElementById("demo").innerHTML = myObj.main.temp;
//   }
// };

// // q=cityname got to  get it from search bar

// getWeather.open("GET", "https://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=paris", true);
// getWeather.send();


// //  Change the way of API retrive data
// async function getLocationWeather(location) {
//   const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`);
//   return result.json();
// };

// getLocationWeather("London");

 


// // // document.getElementById("cityName").innerHTML = myObj.name;
// // // document.getElementById("demo").innerHTML = myObj.main.temp;

const url = 'https://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=paris'
const name = document.getElementById('cityName');
const temp = document.getElementById('demo');

document.getElementById('getText').addEventListener('click', getText);

function getText() {
fetch('sample.txt')
.then((res) => res.text())
// .then((data) => {
//   console.log(data);
// })

.catch(
  console.log('opps.. there is a problem boy')
);
}


// export default getWeather;

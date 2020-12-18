import React from 'react';

var getWeather = new XMLHttpRequest();
getWeather.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("cityName").innerHTML = myObj.name;
    document.getElementById("demo").innerHTML = myObj.main.temp;
  }
};
getWeather.open("GET", "https://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=bucharest", true);
getWeather.send();

export default getWeather;

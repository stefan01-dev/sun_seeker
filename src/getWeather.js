import React from 'react';

var getWeather = new XMLHttpRequest();
getWeather.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    var myObj = JSON.parse(this.responseText);
    var cityName = myObj.name;
    var temp = myObj.main.temp;
    document.getElementById("cityName").innerHTML = cityName;
    document.getElementById("demo").innerHTML = temp;
   
  }
    
};

// q=cityname got to  get it from search bar
getWeather.open("GET", "https://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=bucharest", true);
getWeather.send();

export default getWeather;

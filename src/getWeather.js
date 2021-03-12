import React from 'react';

const area = 'Dubai';
const api = 'e66e299afb2ec32c804c326c2d169257'
const base = `https://api.openweathermap.org/data/2.5/weather?appid=${api}&units=metric&q=${area}`;


function getWeather(){
  window.addEventListener('load', () => {
  console.log('page is fully loaded');
  
    fetch(base)
    .then((res) => {
      return res.json();
    })
    
    .then((data) => {
      console.log(data);
      

    const loc = document.getElementById('cityName');
    const deg = document.getElementById('deg');

      const place = data.name;
      const temp = data.main.temp;
      
      loc.textContent = `${place}`
      deg.textContent= `${temp}`
    
    }
      
    )
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    })

}
)} getWeather()

export default getWeather;

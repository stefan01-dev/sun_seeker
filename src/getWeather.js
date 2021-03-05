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

document.getElementById('getUsers').addEventListener('click', getUsers );
document.getElementById('getPosts').addEventListener('click', getPosts );
document.getElementById('addPost').addEventListener('submit', addPost );

function getUsers() {
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2>Users</h2>';
      data.forEach(function(user){
        output += `
          <ul>
            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
          </ul>
        `;
      })
      document.getElementById('output').innerHTML = output;
    })

    // .catch(
    //   console.log('opps.. there is a problem boy')
    // );
}

function getPosts(){
      fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2>Posts</h2>';
      data.forEach(function(post){
        output += `
         <div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
         </div>
        `;
      })
      document.getElementById('output').innerHTML = output;
    })
}

function addPost(e) {
  e.preventDefault();

  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  fetch('https://jsonplaceholder.typicode.com/posts'
  
  )
}

// export default getWeather;

import React from 'react';

// document.getElementById('cityName').innerHTML = 'aaa'
// document.getElementById('cityName').addEventListener(getWeather );


// function getWeather(){
//     fetch('https://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=paris')
//     .then((res) => res.json())
//     .then((data) => console.log(data)
//     // {
//     //   let output = '<h2>Posts</h2>';
//     //   data.forEach(function(post){
//     //     output += `
//     //      <div>
//     //         <h3>${post.title}</h3>
//     //         <p>${post.body}</p>
//     //      </div>
//     //     `;
//     //   })
//     //   document.getElementById('output').innerHTML = output;
//     // }
//     )
// }


// q=cityname got to  get it from search bar

// getWeather.open("GET", "https://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=paris", true);


 


// // document.getElementById("cityName").innerHTML = myObj.name;
// // document.getElementById("demo").innerHTML = myObj.main.temp;
const area = 'Rome';
const url = `https://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=${area}`;


const name = document.getElementById('cityName');
const temp = document.getElementById('demo');

document.getElementById('getUsers').addEventListener('click', getUsers );
// document.getElementById('getPosts').addEventListener('click', getWeather );
// document.add

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

function getWeather(){
    fetch(url)
      .then((res) => res.json())
      .then((data) =>   
      document.getElementById('demo').innerHTML = data.main.temp
      // console.log(data.main.temp)
      // temp.innerHTML = data.main.temp
    )
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  })

}

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  function getWeather(){
    fetch(url)
    .then((res) => {
      return res.json();
    })
    
    .then((data) => 
      // console.log(data.main.temp)
      document.getElementById('conditions').innerHTML = data.weather[0].description
    )
    .then((data) => 
      // console.log(data.main.temp)
      document.getElementById('cityName').innerHTML = data.main.temp
    )
    .then((data) =>
      document.getElementById('deg').innerHTML = 'aa'
      )
    .then((data) =>
        console.log(data.main)
      )
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    })

};
getWeather();

function execute(){
  return Promise.all[getWeather()]
} execute()
});

export default getWeather;

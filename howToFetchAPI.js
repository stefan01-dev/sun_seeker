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

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method:'POST',
    headers:{
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({
      title:title, body:body
    })
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
}

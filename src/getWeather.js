import React from 'react';

const urls = [
'https://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=paris',
'https://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=berlin',
'https://api.openweathermap.org/data/2.5/weather?appid=e66e299afb2ec32c804c326c2d169257&units=metric&q=bucharest'
]

  const getWeather = () => {
    return(
      <div>
      {/* this works, got to run in in chrome console */}
      { Promise.all(urls.map(url => {
          return fetch(url).then(resp => resp.json())
      })).then(results => {
        //Returns the name of the city
          console.log(results[2].name)
          return results[2].name
      }).catch(() => console.log('something went wrong'))}
      </div>
    )
    }
export default getWeather;

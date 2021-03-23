import React from 'react';
import getWeather from './getWeather';

const Card = () => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		 <img alt='' src='https://robohash.org/test?200x200' />
		  <div> 
			<h2 id='conditions'> Conditions not loaded</h2>
			<h2 id='cityName'> City not loaded</h2>
			<h3 id='deg'> Degrees not loaded</h3>
		  </div>
		</div>
		);
}

const area = 'Chicago';
const api = 'e66e299afb2ec32c804c326c2d169257'
const base = `https://api.openweathermap.org/data/2.5/weather?appid=${api}&units=metric&q=${area}`;


export default Card;
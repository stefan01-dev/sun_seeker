import React from 'react';
import { cities } from './cities';
import getWeather from './getWeather';

const Card = () => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		 <img alt='' src='https://robohash.org/test?200x200' />
		  <div>
			<h2 id='cityName'>ll</h2>
			<h3 id='demo'> degrees</h3>
			<p> {cities[0].name} </p>
			<p> {cities[0].name} </p>
		  </div>
		</div>
		);
}

export default Card;
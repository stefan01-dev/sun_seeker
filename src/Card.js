import React from 'react';
import getWeather from './getWeather';

const Card = () => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		 <img alt='' src='https://robohash.org/test?200x200' />
		  <div>
			<h2> {getWeather} </h2>
			<p> Temperature </p>
		  </div>
		</div>
		);
}

export default Card;
import React, { Component } from 'react';
import CardList from './CardList';
//import SearchBox from './SearchBox'
import {cities} from './cities';
import './index.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			cities: cities,
			//searchfield: ''
		}
	}

	// onSearchChange = (event) => {
	// 	this.setState({searchfield: event.target.value })
	// }

	render() {
		const filteredCities = this.state.cities.filter(cities =>{
			return cities.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (
		  <div className='tc'>
			<h1 className='f1'> RoboBuddies </h1>
			{/* <SearchBox searchChange={this.onSearchChange}/> */}
			<CardList cities = {filteredCities} />
		 </div>
		)
	}
}

export default App;
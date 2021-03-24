import React from 'react';
import Card from "./Card";

const CardList = ({cities}) => {
		return (
			<div> 
			{
				cities.map((user,i) => {
					return (
					<Card 
						key={i}
						id={cities[i].id} 
						name={cities[i].name} 
						email={cities[i].email}
		 				/>
		 			);
				})
			}
		</div>
		);
	}

export default CardList;
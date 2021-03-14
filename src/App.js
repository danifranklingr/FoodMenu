import React, {useState} from "react";
import {Title} from "./components/";
import {Categories} from "./components/";
import {Menu} from "./components/";
import items from "./data";	// Objects Array from Data.js

const allCategories = ["all",...new Set(items.map((item) => item.category))];
			// Array with unique categories.

function App() {
	const [MenuItems, setMenuItems] = useState(items);
	const [categories] = useState(allCategories);

	const filterItems = (Category) => {
		if(Category === "all"){			// "all" means initial state imported from Data.js
			setMenuItems(items);		
			return;
		}
		const newItems = items.filter(item => (item.category === Category));
		setMenuItems(newItems);		// Category != "all" casts filter method.
	}
	
	return(
		<>
			<Title/>
			<Categories categories={categories} onFilter={filterItems}/>
			<Menu items={MenuItems}/>
		</>
	)
}

export default App;

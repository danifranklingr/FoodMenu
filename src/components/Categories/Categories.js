import React from "react";
import {ButonContainer, FilterButon} from "./Categories.elements";

const Categories = ({categories, onFilter}) => {
	return(
		<ButonContainer>
			{categories.map((category,Ind) => {
				return(
					<FilterButon key={Ind} onClick={() => onFilter(category)}>
						{category}
					</FilterButon>
				);
			})}
		</ButonContainer>
	)
}

export default Categories;


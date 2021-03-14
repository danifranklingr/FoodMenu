import React from "react";
import {SectionCenter, MenuItem, Photo, ItemInfo, Header, H4, ItemText} from "./Menu.elements";


const Menu = ({items}) => {
	return(
		<SectionCenter>
			{items.map((menuItem) => {
				const {id, title, img, desc, price} = menuItem;
				return(
					<MenuItem key={id}>
						<Photo src={img}/>
						<ItemInfo>
							<Header>
								<H4> {title} </H4>
								<H4 type="price"> ${price} </H4>
							</Header>
							<ItemText> {desc} </ItemText>
						</ItemInfo>
					</MenuItem>
				);
			})}
		</SectionCenter>
	)
};

export default Menu;

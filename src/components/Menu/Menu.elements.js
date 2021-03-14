
import styled from "styled-components";

const GreyColor5 = "#617C98";
const GoldColor = "#c59d5f";
const MyRadius = "0.25rem";

const MediaQueryMediumScreen = "@media screen and (min-width: 768px)";
const MediaQueryBigScreen = "@media screen and (min-width: 1200px)";


	// Antiguo <div className="section-center">
export const SectionCenter = styled.div`
	width: 90vw;
	margin: 0 auto;
	max-width: 1170px;
	display: grid;
	gap: 3rem 2rem;
	justify-content: center;


	${MediaQueryBigScreen}{
		width: 95vw;
		grid-template-columns: 1fr 1fr;
	}
`;

	// Antiguo <article key={id} className="menu-item">
export const MenuItem = styled.article`
	display: grid;
	gap: 1rem 2rem;
	max-width: 25rem;

	${MediaQueryMediumScreen}{
		grid-template-columns: 225px 1fr;
		gap: 0 1.25rem;
		max-width: 40rem;
	}
`;

	// Antiguo <img src={img} alt={title} className="photo"/>
export const Photo = styled.img`
	object-fit: cover;
	height: 200px;
	width: 100%;
	border: 0.25rem solid ${GoldColor};
	border-radius: ${MyRadius};
	display: block;
	
	&:hover{
		border: 0.25rem solid black;
		box-shadow: 0 0 15px black;
	}

	${MediaQueryBigScreen}{
		height: 150px;
	}

	${MediaQueryMediumScreen}{
		height: 175px;
	}
`;

	// Antiguo <div className="item-info">
export const ItemInfo = styled.div`
`;

	// Antiguo <header>
export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	border-bottom: 0.5px dotted ${GreyColor5};
`;

	// Antiguo <h4> y <h4 className="price">
export const H4 = styled.h4`
	margin-bottom: 0.5rem;
	color: ${GoldColor};
		///// meter prop de price
	text-transform: capitalize;

	&:hover{
		color: black;
		text-shadow: 0 0 15px #bbb;
	}

`;

	// Antiguo <p className="item-text">
export const ItemText = styled.p`
	margin-bottom: 0;
	padding-top: 1rem;
`;

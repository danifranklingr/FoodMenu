import styled from "styled-components";

const GoldColor = "#c59d5f";

	// Antiguo  <section className="menu section">
export const MenuSection = styled.section`
	padding: 2rem 0;
	width: 90vw;
	margin: 0 auto;
	max-width: 1170px;
	
	@media screen and (min-width: 990px){
		width: 95vw;
	}
`;
	
	// Antiguo <div className="title">
export const TitlePlace = styled.div`
	text-align: center;
	margin-bottom: 1rem;
`;

	// Antiguo <h2> Our Menu </h2>
export const H2 = styled.h2`
	letter-spacing: 0.2rem;
	line-height: 1.25;
	margin-bottom: 0.5rem;
	font-size: 2rem;
	
	&:hover{
		color: ${GoldColor};
		letter-spacing: 0.3rem;
		text-shadow: 4px 5px 45px #777;
	}
	@media screen and (min-width: 800px){
		font-size: 2.5rem;
	}
`;
	
	// Antiguo <div className="underline"> 
export const Underline = styled.div`
	width: 14rem;
	height: 0.25rem;
	background: ${GoldColor};
	margin-left: auto;
	margin-right: auto;
		
	&:hover{
		background-color: black;
	}
`;




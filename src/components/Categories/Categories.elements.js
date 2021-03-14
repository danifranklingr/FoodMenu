import styled from "styled-components";

const WhiteColor = "#fff";
const GoldColor = "#c59d5f";
const MyTransition = "all 0.3s linear";
const MyRadius = "0.25rem";

	// Antiguo  <div className="btn-container">
export const ButonContainer = styled.div`
	margin-bottom: 4rem;
	display: flex;
	justify-content: center;
`;

	// Atiguo  <button type="button" className="filter-btn"....
export const FilterButon = styled.button`
	background: transparent;
	border-color: transparent;
	font-size: 1rem;
	text-transform: capitalize;
	margin: 0 0.5rem;
	letter-spacing: 1px;
	padding: 0.375rem 0.75rem;
	color: ${GoldColor};
	cursor: pointer; 
	transition: ${MyTransition};
	border-radius: ${MyRadius};
	
	&:hover{
		background: ${GoldColor};
		color: ${WhiteColor};
	}
`;


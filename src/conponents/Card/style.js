import styled from "styled-components";

const PokemonCard = styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    border-radius: 5px;
    border-width: 2px;
    border-style: solid;
    width: 200px;
    transition: 0.5s ease-in-out;
`;

const PokemonName = styled.h2`
  font-size: 30px;
  font-weight: 800;
  text-decoration: none;
  text-transform: capitalize;
  text-align: center;
  padding: 15px 0;
  transition: 0.5s ease-in-out;
`;

const PokemonImg = styled.img`
    padding: 15px;
    width: 160px;
    height: 130px;
`;


export { PokemonCard, PokemonName, PokemonImg }
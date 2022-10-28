import styled from "styled-components";

const PokemonCard = styled.div`
    text-align: center;
    border-radius: 5px;
    border-width: 2px;
    border-style: solid;
    width: 250px;
    height: 275px;
    padding: 0 10px;
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
    padding: 15px 0;
    width: 160px;
    height: 130px;
`;


export { PokemonCard, PokemonName, PokemonImg }
import styled from "styled-components";

const PokemonCard = styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    border: 1px solid white;
    width: 200px;
    &:hover {
      border: 2px solid red;
    }
`;


const PokemonName = styled.h2`
  font-size: 25px;
  color: #fff;
  text-decoration: none;
  text-transform: capitalize;
  text-align: center;
  padding: 15px 0;
`;

const PokemonImg = styled.img`
    padding: 15px;
    widtt: 160px;
    height: 130px;
`;


export { PokemonCard, PokemonName, PokemonImg }
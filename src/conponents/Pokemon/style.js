import styled from "styled-components";

const DetailsMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PokemonName = styled.h2`
    text-transform: capitalize;
    font-size: 50px;
    font-weight: 800;
`;

const PokemonImg = styled.img`
    width: 200px;
    heigth: 200px;
    margin-bottom: 30px;
`;


export {DetailsMain, PokemonName, PokemonImg }
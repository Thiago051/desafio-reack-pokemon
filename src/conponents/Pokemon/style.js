import styled from "styled-components";

const DetailsMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Info = styled.div`
    border: 1px solid #fff;
    text-align: center;
    border-radius: 5px;
    width: 350px;
    margin-bottom: 30px;
`;

const PokemonName = styled.h2`
    text-transform: capitalize;
    font-size: 50px;
    font-weight: 800;
    padding: 15px;
    
`;

const PokemonImg = styled.img`
    width: 100px;
    heigth: 100px;
    margin-bottom: 30px;
`;


export {DetailsMain, Info, PokemonName, PokemonImg }
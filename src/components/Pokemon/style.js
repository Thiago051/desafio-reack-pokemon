import styled from "styled-components";

export const DetailsMain = styled.main`
    margin-top: -170px;
    padding-top: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Info = styled.div`
    border-width: 2px;
    border-style: solid;
    text-align: center;
    border-radius: 5px;
    width: 350px;
    margin-bottom: 30px;
    transition: 0.5s ease-in-out;
`;

export const PokemonName = styled.h2`
    text-transform: capitalize;
    font-size: 50px;
    font-weight: 800;
    padding: 15px;
    transition: 0.5s ease-in-out;
    
`;

export const PokemonImg = styled.img`
    width: 200px;
    heigth: 200px;
    margin-bottom: 30px;
`;
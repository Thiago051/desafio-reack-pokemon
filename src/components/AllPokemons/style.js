import styled from "styled-components";

export const Container = styled.main`
    background-color: ${props => props.theme.bachground};
    margin-top: -40px;
`;

export const Pokemons = styled.div`
    padding: 50px 0;
    display: flex;
    justify-content: center; 

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
    }

    li {
        margin: 5px;
    }
`;
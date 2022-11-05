import styled from "styled-components";

const Main = styled.main`
    margin-top: -40px;
`;

const Deck = styled.div`
    
    padding: 50px 0;
    display: flex;
    justify-content: center; 
`;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
`;

const Item = styled.li`
    margin: 5px;
`;


export { Main, Deck, List, Item }
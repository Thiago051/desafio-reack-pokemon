import styled from "styled-components";

const Main = styled.main`
    position: relative;
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


export { Main, List, Item }
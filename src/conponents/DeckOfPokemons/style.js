import styled from "styled-components";

const Main = styled.main`
    margin-top: 120px;
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
import styled from "styled-components";

const TypesSection = styled.section`
    margin-top: 30px;
`;

const Title = styled.h2`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
`;

const List = styled.ul`
    padding: 15px 30px;
    display: flex;
`;

const Item = styled.li`
    background-color: #00b300;
    padding: 10px;
    border-radius: 5px;
    margin: 5px;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
`;



export { TypesSection, Title, List, Item }
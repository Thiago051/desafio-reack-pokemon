import styled from "styled-components";

const MovesSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
`;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px 30px;
`;

const Item = styled.li`
    background-color: #ff1a1a;
    padding: 10px;
    border-radius: 5px;
    margin: 5px;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
`;

export { MovesSection, Title, List, Item }
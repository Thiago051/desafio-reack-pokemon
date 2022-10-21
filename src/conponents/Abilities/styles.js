import styled from "styled-components";

const AbilitiesSection = styled.section`
    margin-top: 30px;
`;

const Title = styled.h2`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    transition: 0.5s ease-in-out;
`;

const Description = styled.p`
    font-weight: 500;
    padding: 15px 0;
`;

const List = styled.ul`
    padding: 15px 30px;
`;

const Item = styled.li`
    background-color:  #0000e6;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 18px;
    text-align:center;
    color: #fff;
`;

const AbilityName = styled.h3`
    text-transform: capitalize;
`;



export { AbilitiesSection, Title, Description, List, Item, AbilityName }
import styled from "styled-components";

const AbilitiesSection = styled.section`
    margin-top: 30px;
`;

const Title = styled.h2`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
`;

const Description = styled.p`
    font-weight: 500;
    padding: 15px 0;
`;

const List = styled.ul`
    padding: 15px 30px;
`;

const Item = styled.li`
    list-style: square;
`;

const AbilityName = styled.h3`
    text-transform: capitalize;
`;



export { AbilitiesSection, Title, Description, List, Item, AbilityName }
import styled from "styled-components";

export const MovesSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 30px;
        font-weight: 700;
        text-align: center;
        color: ${props => props.theme.color};
        transition: 0.5s ease-in-out;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 15px 30px;
    }

    li {
        background-color: #ff1a1a;
        padding: 10px;
        border-radius: 5px;
        margin: 5px;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        text-transform: capitalize;
    }
`;

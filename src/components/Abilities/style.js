import styled from "styled-components";

export const AbilitiesSection = styled.section`
    width: 75%;

    h2 {
        font-size: 30px;
        font-weight: 700;
        text-align: center;
        color: ${props => props.theme.color};
        transition: 0.5s ease-in-out;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 15px 30px;
    }

    li {
        background-color:  #0000e6;
        padding: 10px;
        border-radius: 5px;
        font-size: 20px;
        text-align:center;
        color: #fff;
    }

    h3 {
        text-transform: capitalize;
    }

    p {
        font-weight: 500;
        padding: 15px;
    }
`;


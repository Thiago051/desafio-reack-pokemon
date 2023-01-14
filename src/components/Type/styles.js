import styled from "styled-components";

export const TypeSection = styled.section`
    /* margin-top: 30px; */

    h2 {
        font-size: 30px;
        font-weight: 700;
        text-align: center;
        color: ${props => props.theme.color};
        transition: 0.5s ease-in-out;
    }

    ul {
        display: flex;
        gap: 10px;
        padding: 15px 30px;
    }

    li {
        background-color: #00b300;
        padding: 10px;
        border-radius: 5px;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        text-transform: capitalize;
    }
`;
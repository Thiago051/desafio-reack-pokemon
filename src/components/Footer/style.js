import styled from "styled-components";

export const DevInfo = styled.footer`
    background-color: ${props => props.theme.background};
    padding: 80px 0 30px 0;
    text-align: center;
    font-weight: 500;
    bottom: 0;
    left: 0;
    width: 100%;

    p {
        font-size: 25px;
        font-weight: 600;
        color: ${props => props.theme.color};
        transition: 0.5s ease-in-out;
    }

    a {
        margin-left: 5px;
        color: #ff0000;
        text-decoration: underline;
    }
`;
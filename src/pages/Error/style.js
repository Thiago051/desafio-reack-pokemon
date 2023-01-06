import styled from "styled-components";

export const NotFound = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.background};

    h2 {
        font-size: 100px;
        color: ${props => props.theme.color};
    }

    p {
        font-size: 25px;
        font-weight: 800;
        margin-bottom: 60px;
        color: ${props => props.theme.color};
    }

    h2, p {
        transition: 0.5s ease-in-out;
    }
`;
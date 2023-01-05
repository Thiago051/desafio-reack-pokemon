import styled from "styled-components";

export const NotFound = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 100px;
    }

    p {
        font-size: 25px;
        font-weight: 800;
        margin-bottom: 60px;
    }

    span {
        padding: 15px 32px;
        background-color: #ff0000;
        color: #fff;
        font-weight: 900;
        text-transform: uppercase;
        border-width: 2px;
        border-style: solid;
        border-radius: 5px;
    }

    h2, p, span {
        transition: 0.5s ease-in-out;
    }
`;
import styled from "styled-components";

export const Container = styled.main`
    margin-top: -170px;
    padding-top: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-color: ${props => props.theme.background};

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 15px;
        width: 350px;
        border-width: 2px;
        border-style: solid;
        border-radius: 5px;
        border-color: ${props => props.theme.border};
        transition: 0.5s ease-in-out;
    }

    div h2 {
        text-align: center;
        text-transform: capitalize;
        font-size: 50px;
        font-weight: 800;
        padding-bottom: 15px;
        color: #fff;
        font-size: 55px;
        transition: 0.5s ease-in-out;
        text-shadow: 0 0 7px #f00, 0 0 10px #f00, 0 0 21px #f00;
    }

    div img {
        width: 200px;
        height: 200px;
        margin-bottom: 30px;
        transition: 0.5s ease-in-out;
    }
`;

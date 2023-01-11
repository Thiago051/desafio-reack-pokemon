import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.main`
    margin-top: -170px;
    padding-top: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.background};

    div {
        text-align: center;
        width: 350px;
        border-width: 2px;
        border-style: solid;
        border-radius: 5px;
        border-color: ${props => props.theme.border};
        margin-bottom: 30px;
        transition: 0.5s ease-in-out;
    }

    div h2 {
        text-transform: capitalize;
        font-size: 50px;
        font-weight: 800;
        padding: 15px;
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

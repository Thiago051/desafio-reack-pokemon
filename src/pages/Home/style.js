import styled from "styled-components";

export const Filter = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 130px;
    text-align: center;
    margin-bottom: 30px;
    padding-top: 50px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.background};

    p {
        font-weight: 600; 
        font-size: 20px;
        margin-right: 5px;
        transition: 0.5s ease-in-out;
    }

    select {
        text-align: center;
        text-transform: capitalize;
    }
`;

export const Container = styled.div`
    min-height: 1080px;
    background-color: ${props => props.theme.background};
`;


import styled from "styled-components";

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border-width: 2px;
    border-style: solid;
    width: 250px;
    height: 275px;
    padding: 10px;
    border-color: ${props => props.theme.border};
    transition: 0.5s ease-in-out;

    h2 {
        font-size: 30px;
        font-weight: 800;
        text-align: center;
        text-decoration: none;
        text-transform: capitalize;
        padding: 10px;
        color: ${props => props.theme.color};
        transition: 0.5s ease-in-out;
    }

    img {
        padding: 10px 0;
        width: 160px;
        height: 130px;
    }
    
    &:hover {
        border-width: 3px;
        border-color: #f00;
        box-shadow: #f00 0px 5px 15px;
        background-color: ${props => props.theme.background === '#24292e' ? '#1a1a1a' : '#d9d9d9'}
    }

    &:hover h2 {
        color: #fff;
        font-size: 35px;
        text-shadow: 0 0 7px #f00, 0 0 10px #f00, 0 0 21px #f00;
    }
`;
import styled from "styled-components";

export const AppButton = styled.div`
    text-align: center;
    margin-top: 30px;

    button {
        padding: 15px 32px;
        background-color: #ff0000;
        color: #fff;
        font-weight: 900;
        text-transform: uppercase;
        border-width: 2px;
        border-style: solid;
        border-radius: 5px;
        border-color: ${props => props.theme.border};
        cursor: pointer;
        transition: 0.3s ease-in-out; 
    }

    button:hover {
        box-shadow: ${props => props.theme.border === '#000' ? '#000' : '#fff'} 0px 5px 15px; 
    }
`;

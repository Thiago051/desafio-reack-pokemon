import styled from "styled-components";

export const Toggler = styled.div`
    margin-top: 15px;
    
    button {
        padding: 10px;
        font-size: 16px;
        font-weight: 600;
        border-width: 5px;
        border-radius: 5px;
        border-color: ${props => props.theme.border};
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.color};
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }

    button:hover {
        box-shadow: ${props => props.theme.border === '#000' ? '#000' : '#fff'} 0px 5px 15px;
    }
`;


import styled from "styled-components";

export const Toggler = styled.label`
    margin-top: 20px;
    position: relative;
    width: 3.5rem;
    height: 2rem;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #eee;
        transition: 0.4s;
        border-radius: 30px;
    }

    span::before {
        position: absolute;
        content: "";
        height: 1.4rem;
        width: 1.4rem;
        border-radius: 20px;
        left: 0.3rem;
        top: 50%;
        transform: translateY(-50%);
        background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
        transition: 0.4s;
    }

    input:checked + span {
        background-color: #24292e;
    }

    input:checked + span::before {
        left: calc(100% - 1.7rem);
        background: #24292e;
        box-shadow: 
            inset -3px -2px 5px -2px #8983f7,
            inset -10px -4px 0 0 #a3dafb;
    }
`;

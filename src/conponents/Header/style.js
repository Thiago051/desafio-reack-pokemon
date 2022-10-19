import styled from "styled-components";

/*
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
*/
const AppHeader = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: #ff0000;
    padding: 20px 0;
    margin-bottom: 30px;
`;

const AppTitle = styled.h1`
    color: #fff;
    text-align:center;
    font-weight: 700;
`;

const AppLogo = styled.img`
    width: 50px;
    height: 50px;
`;

export { AppHeader, AppTitle, AppLogo }
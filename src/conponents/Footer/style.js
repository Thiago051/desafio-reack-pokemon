import styled from "styled-components";

const AppFooter = styled.footer`
    padding: 80px 0 30px 0;
    text-align: center;
    font-weight: 500;
    bottom: 0;
    left: 0;
    width: 100%;
`;

const FooterText = styled.p`
    font-size: 25px;
    font-weight: 600;
`;

const FooterLink = styled.a`
    color: #ff0000;
    text-decoration: underline;
`;

export { AppFooter, FooterText, FooterLink }
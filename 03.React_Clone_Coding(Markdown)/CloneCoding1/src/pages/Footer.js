import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    border: 1px solid #000;
    margin-top: 5px;
    background-color: #000;

    p {
        padding: 35px;
        color: #fff;
        text-align: center;
        font-size: 17px;
        a {
            color: #fff;
        }
    }
`

const Footer = () => {
    return (
        <FooterContainer>
            <p>
                Powered by <a href='#'>w3.css</a>
            </p>
        </FooterContainer>
    );
};

export default Footer;
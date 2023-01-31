import React from 'react';
import styled from 'styled-components';
import mq from '../MediaQuery';


const HeaderContainer = styled.div`
    width: 100%;
    height: 54.5px;
    position: absolute;
    /* border: 1px solid #000; */

    .header-item {
        position: fixed;
        width: 100%;
        padding: 6px 8px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.201);
        background-color: white;
        z-index: 2;
    }
    
    .header-item a {
        text-decoration: none;
        color: #000;
        padding: 8px 6px;
    }

    .header-item .logo {
        letter-spacing: 4px;
        float: left;
        line-height: 24.5px;
    }
    .header-item .logo b {
        margin-left: 20px;
        font-weight: 900;
        margin-right: 10px;
    }

    .header-item .logo:hover {
        background-color: rgba(0, 0, 0, 0.203);
        cursor: pointer;
    }

    .header-item .info {
        float: right;
        line-height: 38.5px;
        margin-right: 30px;
        
        ${mq.maxWidth('sm')`
        display: none;
    `}
    }

    .header-item .info a {
        letter-spacing: 4px;
        font-size: 16px;
        margin-right: 20px
    }
    
    .header-item .info a:hover {
        background-color: rgba(0, 0, 0, 0.203);
        cursor: pointer;
    }

    
`

const Header = () => {
    return (
        <HeaderContainer>
            <div className='header-item'>
                <a className='logo'><b>BR</b>Architects</a>
                <div className='info'>
                    <a>Projects</a>
                    <a>About</a>
                    <a>Contact</a>
                </div>
            </div>
        </HeaderContainer>
    );
};

export default Header;
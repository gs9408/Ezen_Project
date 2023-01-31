import React, { memo, useCallback } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import {HashLink} from 'react-router-hash-link';

const HeaderContainer = styled.div`
    font-family: 'Lora', serif;
    top: 0;
    box-sizing: border-box;
    position: fixed;
    display: flex;
    flex: 1;
    justify-content: space-between;
    background-color: #fff;
    width: 100%;
    z-index: 9999;
        div {
            text-align: center;
            font-size: 23px;
            line-height: 50px;
        }

        & .bar {
            text-align: center;
            line-height: 50px;
            padding: 8px 16px;
            font-size: 20px;
            color: #000;
            
            &:hover {
                background-color: #bbb;
                cursor: pointer;
            }
        }
        & .food {
            padding: 8px 16px;
        }
        & .mail {
            padding: 8px 16px;
        }
`

const Header = memo(() => {
    const sideBar = useCallback(() => {
        document.querySelector('.nav').style.display = 'block';
    })
    return (
        <HeaderContainer>
            <HashLink className='bar' onClick={sideBar}><i className="fa fa-bars" aria-hidden="true"></i></HashLink>
            <Nav />
            <div className='food'>My Food</div>
            <div className='mail'>Mail</div>
        </HeaderContainer>
    );
});

export default Header;
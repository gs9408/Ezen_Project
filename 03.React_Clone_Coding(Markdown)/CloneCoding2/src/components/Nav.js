import React, { memo, useCallback } from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { Routes, Route } from 'react-router-dom';
import Section1 from './Section1';
import Section2 from './Section2';

const NavContainer = styled.div`
    display: none;
    position: fixed;
    width: 40%;
    min-width: 300px;
    top: 0;
    left: 0;
    box-shadow: 0 5px 5px 3px rgba(0, 0, 0, .16);
    z-index: 999999;
    height: 100%;
    background-color: #fff;
    /* overflow: hidden; */
    a {
        display: block;
        text-decoration: none;
        text-align: left;
        padding: 15px;
        color: #000;
        font-size: 23px;
        &:hover {
            background-color: #ccc
        }
    }
`

const Nav = memo(() => {
    const sideNav = useCallback(() => {
        document.querySelector('.nav').style.display = 'none';
    })
    return (
        <NavContainer className='nav'>
            <HashLink to='#' onClick={sideNav}>Close Menu</HashLink>
            <HashLink to='/#section1'>Food</HashLink>        
            <HashLink to='/#section2'>About</HashLink>
        </NavContainer>
    );
});

export default Nav;
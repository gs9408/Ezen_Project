import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/** 메뉴 링크 --> NavLink: 현재 머물고 있는 페이지와 관련된 링크에 CSS 적용 */
const MenuLinkContainer = styled(NavLink)`
     font-size: 20px;
     cursor: pointer;
     text-decoration: none;
     padding-bottom: 2px;
     color: #222;

     &:hover {
         color: #22b8cf;
         text-decoration: underline;
     }
     &:after {
         content: '|';
         display: inline-block;
         padding: 0 7px;
         color: #ccc;
     }

     &:last-child {
         &:after {
             /* 글자색을 흰색으로 지정하여 화면에서 숨긴다 */
             color: #fff;
         }
     }


`
const MenuLink = ({to, children}) => {
    return (
        <MenuLinkContainer to={to}>
            {children}
        </MenuLinkContainer>
    );
};

export default MenuLink;
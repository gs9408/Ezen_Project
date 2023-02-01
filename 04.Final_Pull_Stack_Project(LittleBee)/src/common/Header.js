/**
 * @filename: Footer.js
 * @description: 화면 상단 공통 컴포넌트
 * @author: Gwansoo Kim
 */

/** 패키지 참조 */
import React, { memo, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import mq from "../MediaQuery";
import bee from "../assets/img/MainPage/bee.png";
import { NavLink, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";

import { getSession } from "../slices/UserSlice";
import { deleteSession } from "../slices/UserSlice";

const HeaderContainer = styled.header`
  max-width: 980px;
  margin: auto;
  background-color: #fff;
  /* border: 1px solid #000; */

  ul {
    display: flex;
    flex-direction: row-reverse;
    padding-top: 20px;
    box-sizing: border-box;
    /* margin-right: 110px; */
    overflow: hidden;
    font-size: 13px;

    li {
      padding: 5px;
      margin-right: 10px;

      &:first-child {
        margin-right: 0;
      }

      /* .after-login {
        display: none;
      } */
    }
  }

  .navLink {
    font-family: "Black Han Sans", sans-serif;
    display: block;
    margin: auto;
    text-align: center;
    width: 150px;
    text-decoration: none;
    color: #666;
    & .bee {
      width: 60%;
    }
    & h2 {
      text-decoration: none;
      margin: 0;
    }
  }
`;

const Header = memo(() => {
  const { data, msg, loading, error } = useSelector((state) => state.UserSlice);

  const dispatch = useDispatch();
  const [ LoginStatus, setLoginStatus ] = useState('');

  useEffect(() => {
    dispatch(getSession())
    .then(
      ({ payload }) => {
      setLoginStatus(payload.result_msg.rt);
    })
    .catch((err) => {
      console.error(err);
    });
  }, [dispatch]);

  const onLogoutClick = useCallback((e) => {
    dispatch(deleteSession());
    setLoginStatus(null);
  }, [dispatch]);

  return (
    <HeaderContainer>
      {LoginStatus !== 'ok' ? (
        <ul>
          <li>
            <NavLink to='/login'>장바구니</NavLink>
          </li>
          <li>
            <NavLink to="/login">마이페이지</NavLink>
          </li>
          <li>
            <NavLink to="/login">로그인</NavLink>
          </li>
          <li>
            <NavLink to="/signup">회원가입</NavLink>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <NavLink to='/mymain/mybasket'>장바구니</NavLink>
          </li>
          <li>
            <NavLink to="/mymain">마이페이지</NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={onLogoutClick}>로그아웃</NavLink>
          </li>
          <li>
            <p>{data.username}님 반갑습니다.</p>
          </li>
        </ul>
      )}
      <NavLink to="/" className="navLink">
        <img src={bee} className="bee" alt="" />
        <h2>Little Bee</h2>
      </NavLink>
      <Nav />
    </HeaderContainer>
  );
});

export default Header;

import React, { memo } from "react";
import { NavLink, Routes, Route } from "react-router-dom";

import MyPage from "./MyPage";
import OrderList from "./OrderList";
import MyBasket from "./MyBasket";
import MyPost from "./MyPost";
import ProfileEdit from "../profile/ProfileEdit";
import ChangePassword from "../profile/ChangePassword";
import OrderChange from './OrderChange';
import OrderCancle from './OrderCancle';

// CSS
import MyWrap from "../../assets/css/mypage/mypageNav";
import OrderDetail from "./OrderDetail";

const MyMain = memo(() => {
  return (
    <MyWrap>
      <div className="side_bar">
        <NavLink className="mypage_logo" to="/mymain">
          <p>My Page</p>
        </NavLink>

        {/* 사용자 정보가 들어갈 부분 */}
        <div className="user_info_w">
          <h4>안녕하세요 사용자 님.</h4>
          <div>
            <p>적립금 : {10223} P</p>
            <p>등급 : silver</p>
          </div>
        </div>

        <div className="nav_w">
          <ul>
            <li>
              <NavLink to="orderlist">주문내역</NavLink>
            </li>
            <li>
              <NavLink to="mybasket">장바구니</NavLink>
            </li>
            <li>
              <NavLink to="mypost">나의 게시글</NavLink>
            </li>
            <li>
              <NavLink to="profileedit">회원정보 수정</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="pageWrap">
        <Routes>
          <Route path="/" exapt={true} element={<MyPage />} />
          <Route path="orderlist" element={<OrderList />} />
          <Route path="/orderdetail" element={<OrderDetail />} />
          <Route path="mybasket" element={<MyBasket />} />
          <Route path="mypost/*" element={<MyPost />} />
          <Route path="profileedit" element={<ProfileEdit />} />
          <Route path="profileedit/*" element={<ChangePassword />} />
          <Route path="/orderchange" element={<OrderChange />} />
          <Route path="/ordercancle" element={<OrderCancle />} />
        </Routes>
      </div>
    </MyWrap>
  );
});

export default MyMain;

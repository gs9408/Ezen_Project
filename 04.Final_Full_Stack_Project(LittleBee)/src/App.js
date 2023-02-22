/**
 * @filename: App.js
 * @description: 레이아웃 구성 컨테이너
 * @author: Gwansoo Kim
 */
import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Main from "./pages/Main";

import TermsOfService from "./pages/TermsPrivacy/TermsOfService";
import PrivacyPolicy from "./pages/TermsPrivacy/PrivacyPolicy";

import Payment from "./pages/Payment/Payment";

import MyMain from "./pages/MyPage/MyMain";

import NoticeList from "./pages/Notice/NoticeList";
import Notice from "./pages/Notice/Notice";
import QandAList from "./pages/Q&A/QandAList";
import QandA from "./pages/Q&A/QandA";
import QandAEdit from "./pages/Q&A/QandAEdit";

import Login from "./pages/profile/Login";
import FindId from "./pages/profile/FindId";
import FindPw from "./pages/profile/FindPw";
import SignUp from "./pages/profile/SignUp";
import FindIdDone from "./pages/profile/FindIdDone";
import FindPwEmailResult from "./pages/profile/FindPwEmailResult";
import FindPwPhoneResult from "./pages/profile/FindPwPhoneResult";

import Products from "./pages/Category/ProductsNav";
import DetailProduct from "./pages/DetailPage/DetailProduct";
import SearchResult from "./pages/SearchResult/SearchResult";

const App = memo(() => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" exapt={true} element={<Main />} />

                {/* 카테고리 컴포넌트 */}
                <Route path="/products/*" element={<Products />} />
                <Route path={`/goods/:category/*`} element={<DetailProduct />} />
                <Route path={`/goods/:category/*`} element={<DetailProduct />} />
                <Route path={`/goods/:category/*`} element={<DetailProduct />} />
                <Route path={"/search/*"} element={<Products />} />

                {/* 이용약관 및 개인정보취급 */}
                <Route path="/termofservice" element={<TermsOfService />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />

                {/* 결제페이지 컴포넌트 */}
                <Route path="/payment" element={<Payment />} />

                {/* 마이페이지 컴포넌트 */}
                <Route path="/mymain/*" element={<MyMain />} />

                {/* 공지사항 컴포넌트 */}
                <Route path="/noticelist" element={<NoticeList />} />
                <Route path="/notice/*" element={<Notice />} />

                {/* Q&A 컴포넌트 */}
                <Route path="/qnalist" element={<QandAList />} />
                <Route path="/qna" element={<QandA />} />
                <Route path="/qnaedit" element={<QandAEdit />} />

                {/* 회원정보 컴포넌트 */}
                <Route path="/login" element={<Login />} />
                <Route path="/login/findid/*" element={<FindId />} />
                <Route path="/login/findpw" element={<FindPw />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login/findid/findiddone" element={<FindIdDone />} />
                <Route path="/findpw/findpwemailresult" element={<FindPwEmailResult />} />
                <Route path="/findpw/findpwphoneresult" element={<FindPwPhoneResult />} />
                
            </Routes>
            <Footer />
        </div>
    );
});

export default App;

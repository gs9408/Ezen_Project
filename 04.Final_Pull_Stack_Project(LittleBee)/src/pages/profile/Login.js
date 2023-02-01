import React, { memo, useCallback } from "react";
import { NavLink, useNavigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FindId from "./FindId";
import FindPw from "./FindPw";
import LoginDesign from "../../assets/css/profile/LoginStyle";
import { postSession } from "../../slices/UserSlice";
import { getSession } from "../../slices/UserSlice";
import RegexHelper from "../../helper/RegexHelper";

const Login = memo(() => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const LoginButton = useCallback(
        (e) => {
            e.preventDefault();
            const regex = RegexHelper.getInstance();
            try {
                /** 아이디검사 */
                regex.value(document.querySelector(".userId"), "아이디를 입력하세요.");

                /**비밀번호검사 */
                regex.value(document.querySelector(".userPw"), "비밀번호를 입력하세요");
            } catch (e) {
                alert(e.message);
                console.error(e);
                return;
            }

            const user_id = document.querySelector(".userId").value;
            const user_pw = document.querySelector(".userPw").value;

        dispatch(
            postSession({
                userid: user_id,
                userpw: user_pw,
            })).then(({ payload, error }) => {
                console.log(payload);
        if (payload.rt === "ok") {
            window.alert("로그인완료!");
            navigate("/");
            window.location.reload();
        } else if (error) {
            window.alert(
                "로그인에 실패했습니다. 아이디나 비밀번호를 확인하세요."
            );
            window.location.reload();
        }
        });
    }, [dispatch, navigate]);

  return (
    <LoginDesign>
      <div>
        <h2>회원 로그인</h2>
        <form className="loginform" onSubmit={LoginButton}>
          <div className="inputWrap">
            <div className="user_Id">
              <label>아이디</label>
              <input type="text" className="userId" placeholder="아이디" />
            </div>
            <br />
            <div className="user_Pw">
              <label>비밀번호</label>
              <input
                type="password"
                className="userPw"
                placeholder="비밀번호"
              />
            </div>
          </div>
          <br />
          <div className="LoginButton">
            <button type="submit" className="button">
              로그인
            </button>
          </div>
          &ensp;
          <NavLink to="/login/findid">아이디찾기 </NavLink>
          &ensp;
          <NavLink to="/login/findPw">비밀번호찾기 </NavLink>
          &ensp;
          <NavLink to="/signup">회원가입</NavLink>
          <br />
          <br />
          <Routes>
            <Route path="/login/findid/*" element={<FindId />} />
            <Route path="/login/findPw/*" element={<FindPw />} />
          </Routes>
        </form>
      </div>
    </LoginDesign>
  );
});

export default Login;

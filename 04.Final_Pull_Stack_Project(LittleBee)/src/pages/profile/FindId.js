import React, { memo, useCallback, useEffect } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import FindStyle from "../../assets/css/profile/FindStyle";
import RegexHelper from "../../helper/RegexHelper";
import FindIdDone from "../profile/FindIdDone";

import { getItem, getFindId } from "../../slices/UserSlice";

import { useSelector, useDispatch } from "react-redux";

const FindId = memo(() => {
    /** 리덕스 관련 코드 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.UserSlice);

    useEffect(() => {
        const email_radio = document.querySelector(".findemail");
        email_radio.checked = true;
    }, []);

    const onEmailChange = useCallback((e) => {
        const mail = document.querySelector(".FindEmail");
        const phone = document.querySelector(".FindPhone");
        mail.classList.remove("active");
        phone.classList.add("active");
    }, []);

    const onNumberChange = useCallback((e) => {
        const mail = document.querySelector(".FindEmail");
        const phone = document.querySelector(".FindPhone");
        mail.classList.add("active");
        phone.classList.remove("active");
    }, []);

    const navigate = useNavigate();
    const findBtn = useCallback((e) => {
        e.preventDefault();

        const mail = document.querySelector(".FindEmail");
        const phone = document.querySelector(".FindPhone");

        const username = document.querySelector('.Findname');
        const useremail = document.querySelector(".Findemail");
        const userphone = document.querySelector(".Findphone");

        const regex = RegexHelper.getInstance();
        // console.log(current.Findname);

        try {
            /**이름검사 */
            regex.value(document.querySelector(".Findname"), "이름을 입력하세요");

            /**이메일검사*/
            if (phone.classList.contains("active") == true) {
                regex.value(document.querySelector(".Findemail"), "이메일을 입력하세요");
                regex.email(document.querySelector(".Findemail"), "이메일을 다시 입력해주세요");
            }

            /**연락처검사 */
            if (mail.classList.contains("active") == true) {
                regex.value(document.querySelector(".Findphone"), "전화번호를 입력하세요");
                regex.cellphone(document.querySelector(".Findphone"), "전화번호를 다시 입력하세요");
            }
        } catch (e) {
            alert(e.message);
            console.error(e);
            return;
        }
        
        dispatch(getFindId({
            username: username.value,
            useremail: useremail.value,
            userphone: userphone.value
        }))
        .then(({payload}) => {
            console.log(payload.data.userid);
            navigate("/login/findid/findiddone", { state: { value: payload }});
        })

    }, [navigate]);

    const onCancel = useCallback((e) => {
        e.preventDefault();

        window.confirm("정말 이전 페이지로 돌아가시겠습니까?");
        navigate("/login");
    }, []);

    return (
        <FindStyle>
            <div>
                <h2>아이디 찾기</h2>
                <form onSubmit={findBtn}>
                    <div className="radiobox">
                        <label>
                            <input type="radio" className="findemail" name="FId" onChange={onEmailChange} />
                            이메일로 찾기
                        </label>
                        <label>
                            <input type="radio" className="findnum" name="FId" onChange={onNumberChange} />
                            휴대전화로 찾기
                        </label>
                    </div>

                    <div className="inputWrap">
                        <div className="user_Id">
                            <label className="name">이름</label>
                            <input type="text" placeholder="이름" className="Findname" name="Findname" />
                        </div>

                        <div className="user_Pw FindEmail">
                            <label className="nam">이메일</label>
                            <input type="text" placeholder="이메일" className="Findemail" />
                        </div>

                        <div className="FindPhone user_Pw active">
                            <label className="nam">휴대전화</label>
                            <input type="text" placeholder="휴대전화" className="Findphone" />
                        </div>
                    </div>

                    <div className="FindButton">
                        <button type="submit" className="button"> 찾기 </button>

                        <button type="button" className="button" onClick={onCancel} >취소</button>
                    </div>
                </form>

                <Routes>
                    <Route path="/findid/findiddone" element={<FindIdDone />} />
                </Routes>
            </div>
        </FindStyle>
    );
});

export default FindId;
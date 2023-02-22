import React, { memo, useCallback, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RegexHelper from "../../helper/RegexHelper";
import FindPassword from "../../assets/css/profile/FindPassword";
import FindPwEmailResult from "./FindPwEmailResult";
import FindPwPhoneResult from "./FindPwPhoneResult";

const FindPw = memo(() => {
    useEffect(() => {
        const email_radio = document.querySelector("#emailFind");
        email_radio.checked = true;
    }, []);

    const onEmailChange = useCallback((e) => {
        const email = document.querySelector(".emailAddress");
        const phone = document.querySelector(".phoneNum");
        phone.classList.add("active");
        email.classList.remove("active");
    }, []);

    const onPhoneChange = useCallback((e) => {
        const email = document.querySelector(".emailAddress");
        const phone = document.querySelector(".phoneNum");
        email.classList.add("active");
        phone.classList.remove("active");
    }, []);

    const OnFindPassword = useCallback(async (e) => {
        e.preventDefault();
        const email = document.querySelector(".emailAddress");
        const phone = document.querySelector(".phoneNum");
        const regex = RegexHelper.getInstance();
        try {
            /**이름검사 */
            regex.value(document.querySelector(".name"), "이름을 입력하세요");
            regex.kor(
                document.querySelector(".name"),
                "이름은 한글만 입력 가능합니다."
            );

            /** 아이디 검사 */
            regex.value(document.querySelector(".uId"), "아이디를 입력하세요");
            regex.engNum(
                document.querySelector(".uId"),
                "아이디는 영문 및 숫자만 입력 가능합니다."
            );

            /**이메일검사*/
            if (phone.classList.contains("active") == true) {
                regex.value(
                    document.querySelector(".email"),
                    "이메일을 입력하세요"
                );
                regex.email(
                    document.querySelector(".email"),
                    "이메일 형식에 맞춰 입력하세요"
                );
            } else {
                /**연락처검사 */
                regex.value(
                    document.querySelector(".phone"),
                    "전화번호를 입력하세요"
                );
                regex.num(
                    document.querySelector(".phone"),
                    "전화번호는 숫자만 입력 가능합니다."
                );
                regex.cellphone(
                    document.querySelector(".phone"),
                    "('-')없이 전화번호 11자리를 형식에 맞춰 입력하세요"
                );
            }
        } catch (e) {
            alert(e.message);
            console.error(e);
            return;
        }

        if (email.classList.contains('active') == false) {
            navigate("/findpw/findpwemailresult");
        }
        else {
            navigate("/findpw/findpwphoneresult");
        }
    });

    const navigate = useNavigate();
    const onCancel = useCallback((e) => {
        e.preventDefault();

        alert("취소되었습니다.");
        navigate("/login");
    },[navigate]);

    return (
        <FindPassword>
            <div className="container">
                <form className="findPasswordForm1" onSubmit={OnFindPassword}>
                    <h2>비밀번호 찾기</h2>
                    <div className="findType">
                        <label htmlFor="emailFind">
                            <input type="radio" name="findRadio" id="emailFind" value="email" onChange={onEmailChange}/>이메일로 찾기</label>
                        <label htmlFor="phoneFind">
                            <input type="radio" name="findRadio" id="phoneFind" value="phone" onChange={onPhoneChange}/>휴대전화 번호로 찾기</label>
                    </div>
                    <div className="infoWrite inputWrap">
                        <div className="userName">
                            <label>이름</label>
                            <input
                                type="text"
                                placeholder="이름 입력"
                                className="name"
                            />
                        </div>
                        <div className="userId">
                            <label>아이디</label>
                            <input
                                type="text"
                                placeholder="아이디 입력"
                                className="uId"
                            />
                        </div>
                        <div className="emailAddress">
                            <label>이메일</label>
                            <input
                                type="email"
                                placeholder="이메일 입력"
                                className="email"
                            />
                        </div>
                        <div className="phoneNum active">
                            <label>휴대전화번호</label>
                            <input
                                type="text"
                                placeholder="휴대전화 번호 입력"
                                className="phone"
                            />
                        </div>
                    </div>
                    <div className="putButton">
                        <button type="submit" className="submitButton Button" >
                            확인
                        </button>
                        <button type="button" className="submitButton Button" onClick={onCancel}>
                            취소
                        </button>
                    </div>
                </form>
            </div>
            <Routes>
                <Route path='findpwemailresult' element={<FindPwEmailResult />} />
                <Route path='findpwphoneresult' element={<FindPwPhoneResult />} />
            </Routes>
        </FindPassword>
    );
});

export default FindPw;
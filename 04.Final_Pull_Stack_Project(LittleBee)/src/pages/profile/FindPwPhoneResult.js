import React, { memo, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FindPwResultStyle from "../../assets/css/profile/FindPwResultStyle";

const FindPwPhoneResult = memo(() => {
    const navigate = useNavigate();
    const onCheckClick = useCallback((e) => {
        e.preventDefault();
        
        navigate("/login");
    })
    return (
        <FindPwResultStyle>
            <div className='temporaryPw'>
                <h2>임시비밀번호 발급</h2>
            </div>

            <div className="pwMsg">
                <p>입력하신 정보와 일치하는 이메일 주소로 임시비밀번호를 전송하였습니다.</p>
            </div>

            <button type='button' className="fPwBtn" onClick={onCheckClick}>확인</button>
        </FindPwResultStyle>
    );
});

export default FindPwPhoneResult;
import React, { memo, useCallback, useEffect } from "react";
import FindDone from "../../assets/css/profile/FindDoneStyle";
import { useNavigate, useLocation } from "react-router-dom";

const FindIdDone = memo(() => {

    // findid에서 보낸 데이터 받아오기
    const location = useLocation();
    const findIdData = location.state.value;

    console.log(findIdData.data.userid);
    const userId = findIdData.data.userid;
    const userName = findIdData.data.username;

    // 찾은 아이디 앞의 네자리 제외 *로 표시
    function findUserId(str) {
        const len = str.length;
        let head = str.substring(0, 4);

        for (let i=4; i<len; i++) {
            head += '*';
        }
        return head;
    }

    console.log(findUserId(userId));

    const navigate = useNavigate();

    const onLogin = useCallback((e) => {
        e.preventDefault();
        navigate("/login");
    });

    const onFindPw = useCallback((e) => {
        e.preventDefault();
        navigate("/login/findpw");
    });
    return (
        <FindDone>
            {findIdData && 
            <div>
                <h2>아이디 찾기 완료</h2>

                <p className="signDone">
                    {userName}님의 아이디 찾기가 완료되었습니다.
                </p>
                <form>
                    <div className="findDone"></div>

                    <div className="doneProfile">
                        <div className="doneName">
                            <p>이름 : {userName}</p>
                        </div>

                        <div className="doneId">
                            <p>아이디 : <span>{findUserId(userId)}</span></p>
                        </div>
                    </div>
                </form>
                <div className="doneButton">
                    <button type="submit" className="button" onClick={onLogin}>
                        로그인
                    </button>

                    <button type="submit" className="button" onClick={onFindPw}>
                        비밀번호 찾기
                    </button>
                </div>
            </div>}
        </FindDone>
    );
});

export default FindIdDone;

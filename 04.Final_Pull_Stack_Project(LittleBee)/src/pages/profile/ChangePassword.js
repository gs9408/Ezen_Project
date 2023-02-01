import React, { memo, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ProfileStyle from "../../assets/css/profile/ProfileEditStyle";
import RegexHelper from "../../helper/RegexHelper";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const passwordChange = memo(() => {
    const navigate = useNavigate();

    const confirm = useCallback(
        async (e) => {
            e.preventDefault();

            const regex = RegexHelper.getInstance();

            try {
                /**비밀번호검사 */
                regex.value(
                    document.querySelector(".currentPassword"),
                    "현재 비밀번호를 입력하세요"
                );
                regex.value(
                    document.querySelector(".newPassword"),
                    "새비밀번호를 입력하세요"
                );

                regex.engnumSpecial(
                    document.querySelector(".checkPassword"),
                    "비밀번호는 특수문자(!@#$^&+= 가능) / 문자 / 숫자 포함 형태의 8~15자리 이내 입력해주세요. "
                );

                regex.value(
                    document.querySelector(".checkPassword"),
                    "비밀번호 확인란을 입력하세요"
                );

                /** 비밀번호같은지검사 */
                regex.compareTo(
                    document.querySelector(".newPassword"),
                    document.querySelector(".checkPassword"),
                    "비밀번호가 틀렸습니다. 다시 입력하세요."
                );
                regex.compareTo2(
                    document.querySelector(".currentPassword"),
                    document.querySelector(".newPassword"),
                    "이전 비밀번호와 동일한 비밀번호를 입력하였습니다. 다시 입력하세요."
                );
            } catch (e) {
                alert(e.message);
                console.error(e);
                e.selector.focus();
                return;
            }
            const result = await Swal.fire({
                // title: '<strong style="color:#000">HTML <u>example</u></strong>',
                icon: "success",
                text: "비밀번호 변경이 완료되었습니다.",
                showCloseButton: true,
                // showCancelButton: true,
                // focusConfirm: true,
                confirmButtonText: "확인",
                // cancelButtonText: '취소'
            });
            console.debug(result);

            if (result.isConfirmed) {
                navigate("/mymain/profileedit");
            }
        },
        [Swal]
    );

    const onCancel = useCallback((e) => {
        e.preventDefault();

        let referrer = document.referrer;
        navigate("/mymain");

        console.log(referrer);
    });

    return (
        <ProfileStyle>
            <div className="container">
                <form>
                    <h2>회원 정보 수정</h2>
                    <div className="required">
                        <div className="c_pw">
                            <label>현재 비밀번호</label>
                            <input
                                type="password"
                                placeholder="현재 비밀번호 입력"
                                className="currentPassword"
                            />
                        </div>
                        <div className="n_pw">
                            <label>새비밀번호</label>
                            <input
                                type="password"
                                placeholder="새비밀번호 입력"
                                className="newPassword"
                            />
                        </div>
                        <div className="ck_pw">
                            <label>비밀번호 확인</label>
                            <input
                                type="password"
                                placeholder="비밀번호 확인"
                                className="checkPassword"
                            />
                        </div>
                    </div>
                    <div className="putButton">
                        <button
                            type="submit"
                            className="submitButton Button"
                            onClick={confirm}
                        >
                            저장
                        </button>
                        <button
                            type="reset"
                            className="submitButton Button"
                            onClick={onCancel}
                        >
                            취소
                        </button>
                    </div>
                </form>
            </div>
        </ProfileStyle>
    );
});

export default passwordChange;

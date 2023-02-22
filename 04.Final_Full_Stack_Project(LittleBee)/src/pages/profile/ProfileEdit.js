import React, { memo, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ProfileStyle from "../../assets/css/profile/ProfileEditStyle";
import RegexHelper from "../../helper/RegexHelper";
import Swal from 'sweetalert2';

const ProfileEdit = memo(() => {

	const confirm = useCallback(async (e) => {
		e.preventDefault();

		const regex = RegexHelper.getInstance();

		try {
			/** 이름검사 */
			regex.value(document.querySelector(".user_name"), "이름을 입력하세요");

			/** 아이디 검사 */
			regex.value(document.querySelector(".user_Id"), "아이디를 입력하세요.");

			/** 비밀번호검사 */
			regex.value(document.querySelector(".user_pw"), "비밀번호를 입력하세요");

			/** 비밀번호가 일치하는지 검사 */
			regex.value(
				document.querySelector(".confirm_pw"),
				"비밀번호 확인란을 입력하세요"
			);
			regex.compareTo(
				document.querySelector(".confirm_pw"),
				document.querySelector(".user_pw"),
				"비밀번호를 다시 입력하세요."
			);

			/**연락처검사 */
			regex.value(
				document.querySelector(".phone_num"),
				"전화번호를 입력하세요"
			);
			regex.cellphone(
				document.querySelector(".phone_num"),
				"전화번호를 다시 입력하세요"
			);

			/**이메일검사 */

			regex.value(document.querySelector(".email"), "이메일을 입력하세요");
			regex.email(
				document.querySelector(".mail"),
				"이메일을 다시 입력해주세요"
			);
		} catch (e) {
			alert(e.message);
			console.error(e);
			e.selector.focus();
			return;
		}
		const result = await Swal.fire({
            icon: 'success',
            text: '저장되었습니다.',
            showCloseButton: true,
            confirmButtonText: '확인',
        });
        console.debug(result);
        
        if (result.isConfirmed) {
            navigate('/mymain');
        }
	}, [Swal]);

    const navigate = useNavigate();
    const onCancel = useCallback((e) => {
        e.preventDefault();

        
        let referrer = document.referrer;
        navigate('/mymain');

        console.log(referrer);
    })

    const onChangePassword = useCallback((e) => {
        e.preventDefault();

        navigate('/mymain/profileedit/changepassword');
    })

	return (
		<ProfileStyle>
			<div className="container">
				<form>
					<h2>회원 정보 수정</h2>
					<div className="required">
						<div className="userName">
							<label>이름</label>
							<input type='text' placeholder="이름" className="user_name" readOnly />
						</div>
						<div className="userId">
							<label>아이디</label>
							<input type="text" placeholder="아이디" className="user_Id" readOnly />
						</div>

						<div className="userPass">
							<label>비밀번호</label>
							<NavLink type="button" value="비밀번호 변경" className="change_pw" onClick={onChangePassword}>비밀번호 변경</NavLink>
						</div>

						<div className="userTel">
							<label>전화번호</label>
							<input type="text" placeholder="전화번호" className="phone_num" />
						</div>

						<div className="userAdd">
							<label>주소</label>
							<input type="text" placeholder="우편번호" className="zipcode" />
							<button type="button" className="Button">
								우편번호찾기
							</button>
							<input type="text" placeholder="도로명주소" className="address" />
							<input
								type="text"
								placeholder="상세주소"
								className="detail_address"
							/>
						</div>

						<div className="email">
							<label>이메일</label>
							<input type="text" placeholder="이메일" className="email" />
						</div>
					</div>
					<div className="putButton">
						<button type="submit" className="submitButton Button" onClick={confirm}>
							저장
						</button>
						<button type='reset' className="submitButton Button" onClick={onCancel}>취소</button>
					</div>
				</form>
			</div>
		</ProfileStyle>
	);
});

export default ProfileEdit;

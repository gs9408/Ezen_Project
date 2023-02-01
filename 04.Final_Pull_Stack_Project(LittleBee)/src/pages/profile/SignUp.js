import React, { memo, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileStyle from "../../assets/css/profile/ProfileStyle";
import RegexHelper from "../../helper/RegexHelper";
import { useSelector, useDispatch } from "react-redux";

import { postItem, getList } from "../../slices/UserSlice";

import { useDaumPostcodePopup } from 'react-daum-postcode';

const SignUp = memo(() => {
    /** 리덕스 관련 코드 */ 
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.UserSlice);

    /** 다음 주소 API 연동 */
    const scriptUrl = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
    const open = useDaumPostcodePopup(scriptUrl);

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
        let roadAddr = data.roadAddress;

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(fullAddress);

         // 우편번호와 주소 정보를 해당 필드에 넣는다.
         document.getElementById('sample4_postcode').value = data.zonecode;
         document.getElementById("sample4_roadAddress").value = roadAddr;
        //  document.getElementById("sample4_jibunAddress").value = data.jibunAddress;
 
         console.log(data.zonecode);
         console.log(roadAddr);
        //  console.log(data.jibunAddress);
    }
    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    /** page 강제 이동 함수 */
    const navigate = useNavigate();

    const Idconfirm = useCallback((e) => {
        e.preventDefault();
        const userId = document.querySelector('.user_id');
        // console.log(data);
        // if (data[0].COUNT == 1) {
        // }
        // else if (data[0].COUNT == 0) {
        //     window.alert('가능');
        // }

        const regex = RegexHelper.getInstance();

        try {
            /** 아이디 검사 */
            regex.value(document.querySelector(".user_id"), "아이디를 입력하세요.");

            regex.minLength(document.querySelector(".user_id"), 5, "아이디는 5글자이상 입력해야합니다.");

            regex.maxLength(document.querySelector(".user_id"), 10, "아이디는 10글자까지 입력 가능합니다.");

            regex.engNum(document.querySelector(".user_id"), "아이디는 영문 및 숫자만 가능합니다.");

        } catch (e) {
            alert(e.message);
            console.error(e);
            return;
        }
        
        dispatch(getList({
            userid: userId.value
        })).then(({payload})=> {
            const result = payload.data[0];
            console.log(result);
            if(result.COUNT == 0) {
                window.alert('사용 가능한 아이디입니다.');
            } else {
                window.alert('이미 존재하는 아이디입니다. 다시 입력해주세요.');
            }
        })
        
    }, [data]);

    const signup = useCallback((e) => {
        e.preventDefault();
        const current = e.currentTarget;
        const regex = RegexHelper.getInstance();

        const postC = current.post_code.value;
        console.log(postC);
        const roadA = current.street_address.value;
        console.log(roadA);
        const detailA = current.detail_address.value;
        console.log(detailA);

        const userName = document.querySelector('.user_name');
        const userId = document.querySelector('.user_id');
        const userPw = document.querySelector('.user_pw');
        const userPhoneNum = document.querySelector('.phone_num');
        const roadNameAddress = `(${postC}) ${roadA}, ${detailA}`;
        // console.log(roadNameAddress);
        const userEmail = document.querySelector('.email');
        const genderChoice = current.gender.value;
        // console.log(genderChoice);
        const userBirth = document.querySelector('.birthdate');
        

        try {
            /**이름검사 */
            regex.value(document.querySelector(".user_name"), "이름을 입력하세요");

            /** 아이디 검사 */
            regex.value(document.querySelector(".user_id"), "아이디를 입력하세요.");

            /**비밀번호검사 */
            regex.value(document.querySelector(".user_pw"), "비밀번호를 입력하세요");

            regex.engnumSpecial(document.querySelector(".user_pw"), "비밀번호는 특수문자(!@#$^&+= 가능) / 문자 / 숫자 포함 형태의 8~15자리 이내 입력해주세요. ");

            /**비밀번호같은지검사 */
            regex.value(document.querySelector(".confirm_pw"),"비밀번호 확인란을 입력하세요");
            regex.compareTo(
                document.querySelector(".confirm_pw"),
                document.querySelector(".user_pw"),
                "비밀번호를 다시 입력하세요."
            );

            /**연락처검사 */
            regex.value(document.querySelector(".phone_num"), "전화번호를 입력하세요");
            regex.cellphone(document.querySelector(".phone_num"), "전화번호를 다시 입력하세요");

            /**이메일검사 */

            regex.value(document.querySelector("#email"), "이메일을 입력하세요");
            regex.email(document.querySelector("#email"), "이메일을 다시 입력해주세요");
            /**라디오박스여부 */
            // 아직미구현
            regex.agree(current.agree, "개인정보 수집 동의란에 체크해주세요.");
        } catch (e) {
            alert(e.message);
            console.error(e);
            return;
        }

        dispatch(postItem({
            username: userName.value,
            userid: userId.value,
            userpw: userPw.value,
            userphone: userPhoneNum.value,
            useraddress: roadNameAddress,
            useremail: userEmail.value,
            gender: genderChoice,
            birthdate: userBirth.value
        })).then(({ payload, error }) => {
            if (error) {
                window.alert(payload.data.rtmsg);
                return;
            }
            window.alert("회원가입이 완료되었습니다.");
            navigate('/');
        })
    }, []);

    const openDetailPrivacy = useCallback((e) => {
        e.preventDefault();

        // const current = e.currentTarget;
        // current.classList.toggle('active');

        const content = document.querySelector('.PrivacyPolicyContainer');

        if (content.style.display != 'block') {
            content.style.display = 'block';
        }
        else {
            content.style.display = 'none';
        }
    }, []);

    const onCancel = useCallback((e) => {
        e.preventDefault();

        const cancel = document.querySelector('.PrivacyPolicyContainer');

        if (cancel.style.display == 'block') {
            cancel.style.display = 'none'
        }
    }, [])

    return (
        <ProfileStyle>
            <div className="container">
                <form onSubmit={signup}>
                    <h2>회원가입</h2>
                    <div className="required">
                        <div className="userName">
                            <label>이름</label>
                            <input type="text" placeholder="이름" className="user_name"/>
                        </div>
                        <div className="userId">
                            <label>아이디</label>
                            <input type="text" placeholder="아이디" className="user_id"/>
                            <button type="submit" className="Button" onClick={Idconfirm}>
                                아이디확인
                            </button>
                        </div>

                        <div className="userPass">
                            <label>비밀번호</label>
                            <input type="password" placeholder="비밀번호" className="user_pw"/>
                        </div>
                        <div className="passCheck">
                            <label>비밀번호확인</label>
                            <input type="password" placeholder="비밀번호확인" className="confirm_pw"/>
                        </div>

                        <div className="userTel">
                            <label>전화번호</label>
                            <input type="text" placeholder="전화번호" className="phone_num"/>
                        </div>

                        <div className="userAdd">
                            <label>주소</label>
                            <input className="zipcode user_enroll_text" id='sample4_postcode' placeholder='우편번호 검색' name='post_code' type="text"/>
                            <button type="button" className="Button adrbutton" onClick={handleClick}>우편번호찾기</button>
                            <input id='sample4_roadAddress' name='street_address' className='detail_address' />
                            <input placeholder='(상세주소)' name='detail_address' className="detail_address" />
                        </div>

                        <div className="emailAddress">
                            <label>이메일</label>
                            <input type="text" placeholder="이메일" className="email" id="email"/>
                        </div>
                    </div>

                    <div className="choice">
                        <h3>추가정보</h3>

                        <div className="gender">
                            <label className="padding">성별</label>
                            <div className="genderbox">
                                <label name="gender">
                                    <input type="radio" className="genderChoice" name="gender" value="F"/>
                                    여자
                                </label>
                            </div>
                            <div className="genderbox">
                                <label name="gender">
                                    <input type="radio" className="genderChoice" name="gender" value="M"/>
                                    남자
                                </label>
                            </div>
                        </div>

                        <div className="birthDate">
                            <label>생년월일</label>
                            <input type="date" className="birthdate" />
                        </div>
                        <div className="consent">
                            <label>
                                <input type="radio" name="agree" />
                                <p>개인정보수집에 동의합니다.</p>
                            </label>
                            <button type='button' onClick={openDetailPrivacy}>자세히 보기</button>
                            
                            <div className="PrivacyPolicyContainer">
                                <button type='button' onClick={onCancel}><i className="fa-solid fa-xmark"></i></button>
                                <h1 className='PrivacyTitle'>개인정보 처리약관</h1>
                                <div className='PrivacyPolicyBox'>
                                    <p className="seePrivacyPolicy">
                                        개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.
                                        <br/>
                                        1. 수집하는 개인정보
                                        이용자는 회원가입을 하지 않아도 정보 검색, 뉴스 보기 등 대부분의 네이버 서비스를 회원과 동일하게 이용할 수 있습니다. 이용자가 메일, 캘린더, 카페, 블로그 등과 같이 개인화 혹은 회원제 서비스를 이용하기 위해 회원가입을 할 경우, 네이버는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.
                                        <br/>
                                        회원가입 시점에 네이버가 이용자로부터 수집하는 개인정보는 아래와 같습니다.
                                        <br/>
                                        - 회원 가입 시 필수항목으로 아이디, 비밀번호, 이름, 생년월일, 성별, 휴대전화번호를, 선택항목으로 본인확인 이메일주소를 수집합니다.
                                        <br/>
                                        단, 비밀번호 없이 회원 가입 시에는 필수항목으로 아이디, 이름, 생년월일, 휴대전화번호를, 선택항목으로 비밀번호를 수집합니다.
                                        만약 이용자가 입력하는 생년월일이 만14세 미만 아동일 경우에는 법정대리인 정보(법정대리인의 이름, 생년월일, 성별, 중복가입확인정보(DI), 휴대전화번호)를 추가로 수집합니다.
                                        <br/>
                                        - 단체아이디로 회원가입 시 단체아이디, 비밀번호, 단체이름, 이메일주소, 휴대전화번호를 필수항목으로 수집합니다. 그리고 단체 대표자명을 선택항목으로 수집합니다.
                                        서비스 이용 과정에서 이용자로부터 수집하는 개인정보는 아래와 같습니다.
                                        <br/>
                                        - 회원정보 또는 개별 서비스에서 프로필 정보(별명, 프로필 사진)를 설정할 수 있습니다. 회원정보에 별명을 입력하지 않은 경우에는 마스킹 처리된 아이디가 별명으로 자동 입력됩니다.

                                        - 네이버 내의 개별 서비스 이용, 이벤트 응모 및 경품 신청 과정에서 해당 서비스의 이용자에 한해 추가 개인정보 수집이 발생할 수 있습니다. 추가로 개인정보를 수집할 경우에는 해당 개인정보 수집 시점에서 이용자에게 ‘수집하는 개인정보 항목, 개인정보의 수집 및 이용목적, 개인정보의 보관기간’에 대해 안내 드리고 동의를 받습니다.
                                        <br/>

                                        서비스 이용 과정에서 IP 주소, 쿠키, 서비스 이용 기록, 기기정보, 위치정보가 생성되어 수집될 수 있습니다. 또한 이미지 및 음성을 이용한 검색 서비스 등에서 이미지나 음성이 수집될 수 있습니다.
                                        <br/>
                                        구체적으로 1) 서비스 이용 과정에서 이용자에 관한 정보를 자동화된 방법으로 생성하여 이를 저장(수집)하거나,
                                        <br/>
                                        2) 이용자 기기의 고유한 정보를 원래의 값을 확인하지 못 하도록 안전하게 변환하여 수집합니다. 서비스 이용 과정에서 위치정보가 수집될 수 있으며,
                                        <br/>
                                        네이버에서 제공하는 위치기반 서비스에 대해서는 '네이버 위치기반서비스 이용약관'에서 자세하게 규정하고 있습니다.
                                        이와 같이 수집된 정보는 개인정보와의 연계 여부 등에 따라 개인정보에 해당할 수 있고, 개인정보에 해당하지 않을 수도 있습니다.
                                        <br/>

                                        2. 수집한 개인정보의 이용
                                        네이버 및 네이버 관련 제반 서비스(모바일 웹/앱 포함)의 회원관리, 서비스 개발・제공 및 향상, 안전한 인터넷 이용환경 구축 등 아래의 목적으로만 개인정보를 이용합니다.
                                        <br/>

                                        - 회원 가입 의사의 확인, 연령 확인 및 법정대리인 동의 진행, 이용자 및 법정대리인의 본인 확인, 이용자 식별, 회원탈퇴 의사의 확인 등 회원관리를 위하여 개인정보를 이용합니다.
                                        <br/>
                                        - 콘텐츠 등 기존 서비스 제공(광고 포함)에 더하여, 인구통계학적 분석, 서비스 방문 및 이용기록의 분석, 개인정보 및 관심에 기반한 이용자간 관계의 형성, 지인 및 관심사 등에 기반한 맞춤형 서비스 제공 등 신규 서비스 요소의 발굴 및 기존 서비스 개선 등을 위하여 개인정보를 이용합니다.
                                        <br/>
                                        - 법령 및 네이버 이용약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재, 계정도용 및 부정거래 방지, 약관 개정 등의 고지사항 전달, 분쟁조정을 위한 기록 보존, 민원처리 등 이용자 보호 및 서비스 운영을 위하여 개인정보를 이용합니다.
                                        <br/>
                                        - 유료 서비스 제공에 따르는 본인인증, 구매 및 요금 결제, 상품 및 서비스의 배송을 위하여 개인정보를 이용합니다.
                                        <br/>
                                        - 이벤트 정보 및 참여기회 제공, 광고성 정보 제공 등 마케팅 및 프로모션 목적으로 개인정보를 이용합니다.
                                        <br/>
                                        - 서비스 이용기록과 접속 빈도 분석, 서비스 이용에 대한 통계, 서비스 분석 및 통계에 따른 맞춤 서비스 제공 및 광고 게재 등에 개인정보를 이용합니다.
                                        <br/>
                                        - 보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할 수 있는 서비스 이용환경 구축을 위해 개인정보를 이용합니다.
                                        <br/>
                                        3. 개인정보의 보관기간
                                        회사는 원칙적으로 이용자의 개인정보를 회원 탈퇴 시 지체없이 파기하고 있습니다.
                                        <br/>
                                        단, 이용자에게 개인정보 보관기간에 대해 별도의 동의를 얻은 경우, 또는 법령에서 일정 기간 정보보관 의무를 부과하는 경우에는 해당 기간 동안 개인정보를 안전하게 보관합니다.
                                        <br/>

                                        이용자에게 개인정보 보관기간에 대해 회원가입 시 또는 서비스 가입 시 동의를 얻은 경우는 아래와 같습니다.
                                        <br/>
                                        - 부정 가입 및 이용 방지
                                        부정 이용자의 가입인증 휴대전화번호 또는 DI (만14세 미만의 경우 법정대리인DI) : 탈퇴일로부터 6개월 보관
                                        탈퇴한 이용자의 휴대전화번호(복호화가 불가능한 일방향 암호화(해시처리)) : 탈퇴일로부터 6개월 보관
                                        <br/>
                                        - QR코드 복구 요청 대응
                                        QR코드 등록 정보:삭제 시점으로부터6개월 보관
                                        <br/>
                                        - 스마트플레이스 분쟁 조정 및 고객문의 대응
                                        휴대전화번호:등록/수정/삭제 요청 시로부터 최대1년
                                        <br/>
                                        - 네이버 플러스 멤버십 서비스 혜택 중복 제공 방지
                                        암호화처리(해시처리)한DI :혜택 제공 종료일로부터6개월 보관
                                        <br/>
                                        - 지식iN eXpert 재가입 신청 및 부정 이용 방지
                                        eXpert 서비스 및 eXpert 센터 가입 등록정보 : 신청일로부터 6개월(등록 거절 시, 거절 의사 표시한 날로부터 30일) 보관
                                        전자상거래 등에서의 소비자 보호에 관한 법률, 전자문서 및 전자거래 기본법, 통신비밀보호법 등 법령에서 일정기간 정보의 보관을 규정하는 경우는 아래와 같습니다. 네이버는 이 기간 동안 법령의 규정에 따라 개인정보를 보관하며, 본 정보를 다른 목적으로는 절대 이용하지 않습니다.
                                        <br/>
                                        - 전자상거래 등에서 소비자 보호에 관한 법률
                                        계약 또는 청약철회 등에 관한 기록: 5년 보관
                                        대금결제 및 재화 등의 공급에 관한 기록: 5년 보관
                                        소비자의 불만 또는 분쟁처리에 관한 기록: 3년 보관
                                        <br/>
                                        - 전자문서 및 전자거래 기본법
                                        공인전자주소를 통한 전자문서 유통에 관한 기록 : 10년 보관
                                        <br/>
                                        - 전자서명 인증 업무
                                        인증서와 인증 업무에 관한 기록: 인증서 효력 상실일로부터 10년 보관
                                        <br/>
                                        - 통신비밀보호법
                                        로그인 기록: 3개월
                                        <br/>

                                        참고로 네이버는 ‘개인정보 유효기간제’에 따라 1년간 서비스를 이용하지 않은 회원의 개인정보를 별도로 분리 보관하여 관리하고 있습니다.
                                        <br/>

                                        4. 개인정보 수집 및 이용 동의를 거부할 권리
                                        이용자는 개인정보의 수집 및 이용 동의를 거부할 권리가 있습니다. 회원가입 시 수집하는 최소한의 개인정보, 즉, 필수 항목에 대한 수집 및 이용 동의를 거부하실 경우, 회원가입이 어려울 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="putButton">
                        <button type="submit" className="submitButton Button">
                            가입
                        </button>
                        <button
                            type="button"
                            className="submitButton Button"
                            onClick={(e) => navigate("/")}
                        >
                            취소
                        </button>
                    </div>
                </form>
            </div>
        </ProfileStyle>
    );
});

export default SignUp;
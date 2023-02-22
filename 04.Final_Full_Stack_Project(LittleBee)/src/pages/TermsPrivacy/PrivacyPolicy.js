import React, { memo } from 'react';
import styled from 'styled-components';

const Terms = styled.div`
    width: 980px;
    margin: auto;
    padding: 15px;

    h3 {
        font-size: 18px;
        font-weight: bold;
        margin: 20px 0 50px;
    }
    .termsTitle {
        font-size: 16px;
        font-weight: bold;
        margin: 10px 0;
    }
    .termsContent {
        line-height: 1.5em;
        margin-bottom: 15px;
        font-size: 15px;
    }
    .termsList {
        line-height: 1.5em;
        list-style: decimal;
        padding: 0 50px;
        margin-bottom: 15px;
        font-size: 15px;
        .upperLatin {
            list-style: upper-latin;
            padding: 0 50px;

            .lowerLatin {
                list-style: lower-latin;
                padding: 0 50px;
            }
        }
    }
`;

const PrivacyPolicy = memo(() => {
    
    return (
        <Terms>
            <h3>아가방앤컴퍼니 개인정보처리방침</h3>
            <p className='termsContent'>
                회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
            <h4 className='termsTitle'>제1조 개인정보의 처리목적</h4>
            <p className='termsContent'>
                본 약관은 주식회사 아가방앤컴퍼니(이하 “회사”라 한다)가 이용자에게 제공하는 각종 서비스와 관련해 상호간의 권리와 의무, 기타 필요한 사항을 규정하는데 목적이 있습니다.</p>
            <ul className='termsList'>
                <li>
                    회원 가입 및 관리
                    <p>
                        회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 만 14세 미만 아동의 서비스 이용 제한, 각종 고지·통지, 고충처리 목적으로 개인정보를 처리합니다.
                    </p>
                </li>
                <li> 
                    재화 또는 서비스 제공
                    <p>물품배송, 서비스 제공, 계약서·청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금 결제·정산, 채권추심의 목적으로 개인정보를 처리합니다.</p>
                </li>
            </ul>
            
            <h4 className='termsTitle'>제2조 개인정보의 처리 및 보유기간</h4>
            <ul className='termsList'>
                <li> 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</li>
                <li>
                    각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                    <ul className='upperLatin'>
                        <li>홈페이지 회원 가입 및 관리 : 홈페이지 탈퇴 후 3개월, 멤버십 부정이용(포인트·마일리지 부정 이용 및 타인명의 도용) 기록 : 1년, 다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지</li>
                        <ul className='lowerLatin'>
                            <li>관계 법령 위반에 따른 수사·조사 등이 진행 중인 경우에는 해당 수사·조사 종료 시까지</li>
                            <li>홈페이지 이용에 따른 채권·채무관계 잔존 시에는 해당 채권·채무관계 정산 시까지</li>
                        </ul>
                        <li>
                            재화 또는 서비스 제공 : 재화·서비스 공급완료 및 요금결제·정산 완료시까지, 다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지
                        </li>
                        <ul className='lowerLatin'>
                            <li>「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시·광고, 계약내용 및 이행 등 거래에 관한 기록</li>
                            <ul>
                                <li>표시·광고에 관한 기록 : 6개월</li>
                                <li>계약 또는 청약철회, 대금결제, 재화 등의 공급기록 : 5년</li>
                                <li>소비자 불만 또는 분쟁처리에 관한 기록 : 3년</li>
                            </ul>
                            <li>「통신비밀보호법」에 따른 통신사실확인자료</li>
                            <ul>
                                <li>가입자 전기통신일시, 개시·종료시간, 상대방 가입자번호, 사용도수, 발신기지국 위치추적자료 : 1년</li>
                                <li>컴퓨터통신, 인터넷 로그기록자료, 접속지 추적자료 : 3개월</li>
                            </ul>
                        </ul>
                    </ul>
                </li>
                <li>회사는 관련 법령(개인정보보호법 시행령 제48조의5)에 의거하여 장기 미이용 회원의 개인정보를 분리보관 합니다.</li>
                <ul className='upperLatin'>
                    <li>홈페이지 회원 가입 및 관리 : 홈페이지 탈퇴 후 3개월, 멤버십 부정이용(포인트·마일리지 부정 이용 및 타인명의 도용) 기록 : 1년, 다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지</li>
                    <li>서비스 미이용 기준 : 구매이력, 포인트 사용 또는 로그인(홈페이지 아이디 보유 회원에 한함) 중에서 최종 일시 기준</li>
                    <li>회사는 휴면 전환 30일 전까지 휴면 예정 회원에게 별도 분리 보관되는 사실 및 휴면 예정일, 별도 분리 보관하는 개인정보 항목을 이메일, 서면, 모사전송, 전화 또는 이와 유사한 방법 중 어느 하나의 방법으로 이용자에게 알립니다.</li>
                    <li>서비스 재이용 : 회사 홈페이지에서 본인인증 또는 고객센터에서 본인확인 후 재이용이 가능합니다.</li>
                    <li>개인정보 별도 분리저장(휴면회원 전환) 후에도 1년간 서비스 이용 이력이 없을 시, 탈퇴회원으로 전환되며, 포인트를 보유한 경우 모두 소멸됩니다.</li>
                </ul>
            </ul>

        </Terms>
    );
});

export default PrivacyPolicy;
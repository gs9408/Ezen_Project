import React, { useEffect, memo } from 'react';
import { useCallback, useState } from 'react';
import PaymentContainer from '../../assets/css/payment/payment';
import RegexHelper from "../../helper/RegexHelper";
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useQueryString } from '../../hook/useQueryString';

// 리덕스 참조
import { useSelector, useDispatch } from "react-redux";
import { getAllList } from "../../slices/PaymentSlice";

import { useNavigate } from 'react-router-dom';

function getCookieValue(key) {
    let cookieKey = key + "="; 
    let result = "";
    const cookieArr = decodeURIComponent(document.cookie).split(";");
    
    for(let i = 0; i < cookieArr.length; i++) {
      if(cookieArr[i][0] === " ") {
        cookieArr[i] = cookieArr[i].substring(1);
      }
      
      if(cookieArr[i].indexOf(cookieKey) === 0) {
        result = cookieArr[i].slice(cookieKey.length, cookieArr[i].length);
        return result;
      }
    }
    return result;
}

const Payment = memo(() => {
    // 데이터 갱신 상태를 확인하기 위한 상태값
    const [init, setInit] = useState(false);

    const navigate = useNavigate();

    // 쿼리스트링 획득
    const { select, user } = useQueryString();
    
    /** 리덕스 관련 코드 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.PaymentSlice);

    let price = null;
    let delivery = null;

    /** 쿼리스트링에 따라 불러오는 정보가 다름 */
    useEffect(() => {
        dispatch(getAllList({
            select: select,
            user: user
        })).then(() => {
            setInit(true);
        });

    }, [dispatch, select, user]);

    /**
     * 상품번호
     * 상품이름
     * 구매개수
     * 상품금액
     * 썸네일
     * 옵션번호
     * 옵션이름
     */

    let data1 = [];

    // data가 배열 형식이라면
    if (Array.isArray(data)) {
        if (select === 'item') {
            console.log('직접구매상황');
            data.map((v, i) => {
                data1.push({...v});
                data1[0].prodqty = parseInt(getCookieValue('prodqty'));
                data1[0].optnum = getCookieValue('optnum');
                data1[0].optname = getCookieValue('optname');
            })
            price = data1.reduce((acc, cur) => acc + (cur.prodprice * cur.prodqty), 0);
            delivery = price >= 50000 ? 0 : 3000;
        } else {
            console.log('장바구니 구매상황');
            price = data.reduce((acc, cur) => acc + (cur.prodprice * cur.prodqty), 0);
            delivery = price >= 50000 ? 0 : 3000;
        }
    }

    // console.log(data1);

    // 주문자 정보 수정 시 직접입력 가능
    const clickUserEdit = useCallback((e) => {
        document.querySelectorAll('.input').forEach((v, i) => {
            const m = v.getAttribute('value');
            v.removeAttribute('readonly');
            v.value = null;
            console.log(m);
        })
    }, [])

    // 배송정보 수정 시 직접입력 가능
    const clickAddrEdit = useCallback((e) => {
        document.querySelectorAll('.delInput').forEach((v, i) => {
            const m = v.getAttribute('value');
            v.removeAttribute('readonly');
            v.value = null;
            console.log(m);
        })
    }, [])

    const onCancle = useCallback((e) => {
        e.preventDefault();

        if (window.confirm("취소하시겠습니까?")) {
            alert("취소되었습니다.");
            // 확인 시 뒤로가기
            window.history.back();
        }
    }, []);

    // submit 이벤트
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        const regex = RegexHelper.getInstance();
        const current = e.target;

        try {
            /** 아이디 검사 */
            regex.value(document.querySelector("#user"), "주문자 이름를 입력하세요.");

            regex.value(document.querySelector("#phone"), "휴대폰번호를 입력하세요.");

            regex.cellphone(document.querySelector("#phone"), "휴대폰번호 형식이 아닙니다.")
            
            regex.value(current.delUser, "배송받는 사람의 이름를 입력하세요.");

            regex.value(current.delPhone, "배송받는 사람의 휴대폰번호를 입력하세요.");
            regex.cellphone(current.delPhone, "휴대폰번호 형식이 아닙니다.")

            regex.value(current.add, "배송지 주소를 입력하세요.");
            
            regex.agree(document.querySelector('#check'), "결제 동의란에 체크해주세요.");

        } catch (e) {
            alert(e.message);
            console.error(e);
            return;
        }
        if (window.confirm("결제하시겠습니까?")) {
            alert("결제완료!");
        }
    }, []);

    // 우편번호 검색 이벤트
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
            extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
            console.log(fullAddress);
        }
        // console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'

        // 우편번호와 주소 정보를 해당 필드에 넣는다.
        document.getElementById('sample4_postcode').value = data.zonecode;
        document.getElementById("sample4_roadAddress").value = roadAddr;
        document.getElementById("sample4_jibunAddress").value = data.jibunAddress;

        console.log(data.zonecode);
        console.log(roadAddr);
        console.log(data.jibunAddress);

    };
  
    const handleClick = () => {
      open({ onComplete: handleComplete });
    };

    return (
        <PaymentContainer>
            <h1>결제페이지</h1>
            {error ? (
                <h1> ERROR!! </h1>
            ) : (
                (init && data) && (
                    <form className='wrap' onSubmit={onSubmit}>
                        <div className='box'>
                            <div className='prodInfo box_com'>
                                <h3 className='h3'>주문상품 정보</h3>
        
                                {select === 'item' ?
                                (data1?.map((v, i) => {
                                    return(
                                        <div key={i} className='prodBox'>
                                            <img src={v.thumbnail} alt={v.thumbnail}/>
                                            <div>
                                                <p>{v.prodname}</p>
                                                <span>{v.optname} / {v.prodqty}개</span>
                                                <p>{(v.prodprice * v.prodqty).toLocaleString()} 원</p>
                                            </div>
                                        </div>
                                    )
                                }))
                                :
                                (data?.map((v, i) => {
                                    return(
                                        <div key={i} className='prodBox'>
                                            <img src={v.thumbnail} alt={v.thumbnail}/>
                                            <div>
                                                <p>{v.prodname}</p>
                                                <span>{v.optname} / {v.prodqty}개</span>
                                                <p>{(v.prodprice * v.prodqty).toLocaleString()} 원</p>
                                            </div>
                                        </div>
                                    )
                                }))}
                            </div>
                            <div className='userInfo box_com'>
                                <h3 className='h3'>주문자 정보</h3>
                                <div className='edit' onClick={clickUserEdit}>수정</div>
                                <table className='table' id='userInfo'>
                                    <colgroup>
                                        <col width="120" />
                                        <col />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th>주문자</th>
                                            <td>
                                                <input type='text' defaultValue='홍길동' readOnly className='input' name='user' id='user'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>전화번호</th>
                                            <td>
                                                <input type='text' defaultValue='03112345678' readOnly  className='input' name='tel'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>휴대폰번호</th>
                                            <td>
                                                <input type='tel' defaultValue='01012345678' readOnly  className='input' name='phone'
                                                id='phone'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>이메일</th>
                                            <td>
                                                <input type='email' defaultValue='asd1234@gmail.com' readOnly  className='input' name='email'/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='deliInfo box_com'>
                                <h3 className='h3'>배송 정보</h3>
                                <div className='edit' onClick={clickAddrEdit}>수정</div>
                                <table className='table'>
                                    <colgroup>
                                        <col width="120" />
                                        <col />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th>배송받는 사람</th>
                                            <td>
                                                <input type='text' defaultValue='홍길동' readOnly className='delInput' name='delUser'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>휴대폰번호</th>
                                            <td>
                                                <input type='tel' defaultValue='01012345678' readOnly className='delInput' name='delPhone' />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>배송지</th>
                                            <td className='address'>
                                                <input id='sample4_postcode' placeholder='우편번호 검색' name='add' readOnly/>
                                                <button type='button' onClick={handleClick} className='adrbutton'>검색</button>
                                                <input id='sample4_roadAddress'/>
                                                <input id='sample4_jibunAddress'/>
                                                <input placeholder='(상세주소)'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>배송메세지</th>
                                            <td>
                                                <input type='text' defaultValue='배송 전 연락 주세요.' name='mess' />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='payInfo'>
                            <div className='payinfoDiv'>
                                <h3 className='h3'>최종 결제금액</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>상품금액</th>
                                            <td>{price.toLocaleString()} 원</td>
                                        </tr>
                                        <tr>
                                            <th>배송비</th>
                                            <td>{delivery.toLocaleString()} 원</td>
                                        </tr>
                                        <tr>
                                            <th>적립금 사용</th>
                                            <td>0 원</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>총 결제금액</th>
                                            <td>{(price+delivery).toLocaleString()} 원</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className='payinfoDiv'>
                                <h3 className='h3'>결제방법</h3>
                                <div className='paymethod'>
                                    <label> 
                                        <input type='radio' name='paymethod'/>
                                        신용카드
                                    </label>
                                    <label>
                                        <input type='radio' name='paymethod'/>
                                        무통장입금
                                    </label>
                                    <label>
                                        <input type='radio' name='paymethod'/>
                                        가상계좌
                                    </label>
                                    <label>
                                        <input type='radio' name='paymethod'/>
                                        핸드폰결제
                                    </label>
                                    <label>
                                        <input type='radio' name='paymethod'/>
                                        카카오페이
                                    </label>
                                </div>
                                <div className='payselect'>
                                    <select>
                                        <option>--은행을 선택하세요--</option>
                                        <option>신한은행 112394-123-153435 예금주: 홍길동</option>
                                        <option>우리은행 112394-123-153435 예금주: 홍길동</option>
                                    </select>
                                    <input placeholder='입금자명'/>
                                    <p>주문 후 6시간 내 미입금 시 주문이 자동으로 취소됩니다.</p>
                                </div>
                                <div className='receipt'>
                                    <input type='checkbox'/>
                                    <label>현금영수증 신청</label>
                                </div>
                            </div>
                            <div className='agree'>
                                <input type='checkbox' id='check' />
                                <label><span>&lt;필수&gt;</span>구매하실 상품의 결제정보를 확인하였으며,</label>
                                <p>구매진행에 동의합니다.</p>
                                <button type='submit' id='submit' >결제하기</button>
                                <button type='button' id='submit' onClick={onCancle}>취소</button>
                            </div>
                        </div>
                    </form>
                )
            )}
        </PaymentContainer>
    );
});

export default Payment;
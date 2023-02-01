import React, { memo, useCallback, useState } from 'react';
import { useQueryString } from '../../hook/useQueryString';
import Wrap from '../../assets/css/mypage/orderchange';
import RegexHelper from "../../helper/RegexHelper";

import img1 from '../../assets/img/MyPage/1.webp';
import img2 from '../../assets/img/MyPage/2.webp';
import img3 from '../../assets/img/MyPage/3.webp';
import { useNavigate } from 'react-router-dom';

const list = [
    {ordernum: 2022111701,
        date: '2022.11.10',
        state: '결제진행중',
        item: [
            { img: img1, name: '귀여운 고양이 접시', price: 32000, option: '파랑', num: 2, state: '배송중' },
            { img: img2, name: '못생긴 나무늘보 쿠션', price: 12000, option: '나무늘보', num: 1, state: '배송준비중' },
            { img: img3, name: '특색없는 담요', price: 13000, option: '나무', num: 2, state: '배송중' }
        ]
    },
    {ordernum: 2022111702,
        date: '2022.11.10',
        state: '결제완료',
        item: [
            {img: img2, name: '못생긴 나무늘보 쿠션', price: 79000, option: '나무늘보', num: 3, state: '배송준비중'},
            {img: img3, name: '특색없는 담요', price: 79000, option: '나무', num: 1, state: '배송준비중'},
            {img: img1, name: '귀여운 고양이 접시', price: 79000, option: '파랑', num: 1, state: '배송준비중'},
        ]
    },
    {ordernum: 2022111703,
        date: '2022.11.10',
        state: '배송준비중',
        item: [
            {img: img3, name: '특색없는 담요', price: 29000, option: '나무', num: 1, state: '결제진행중'},
            {img: img1, name: '귀여운 고양이 접시', price: 29000, option: '파랑', num: 3, state: '결제진행중'},
            {img: img2, name: '못생긴 나무늘보 쿠션', price: 29000, option: '나무늘보', num: 1, state: '결제진행중'},
        ]
    },
    {ordernum: 2022111704,
        date: '2022.11.10',
        state: '배송완료',
        item: [
            { img: img1, name: '귀여운 고양이 접시', price: 132000, option: '파랑', num: 2, state: '배송중' },
            { img: img3, name: '특색없는 담요', price: 13000, option: '나무', num: 1, state: '배송준비중' },
            { img: img2, name: '못생긴 나무늘보 쿠션', price: 132000, option: '나무늘보', num: 3, state: '배송중' }
        ]
    },
    {ordernum: 2022111705,
        date: '2022.11.10',
        state: '환불',
        item: [
            {img: img2, name: '못생긴 나무늘보 쿠션', price: 79000, option: '나무늘보', num: 1, state: '배송준비중'},
            {img: img1, name: '귀여운 고양이 접시', price: 79000, option: '파랑', num: 1, state: '배송준비중'},
            {img: img3, name: '특색없는 담요', price: 79000, option: '나무', num: 1, state: '배송준비중'},
        ]
    },
    {ordernum: 2022111706,
        date: '2022.11.10',
        state: '배송준비중',
        item: [
            {img: img3, name: '특색없는 담요', price: 29000, option: '나무', num: 1, state: '결제진행중'},
            {img: img2, name: '못생긴 나무늘보 쿠션', price: 29000, option: '나무늘보', num: 2, state: '결제진행중'},
            {img: img1, name: '귀여운 고양이 접시', price: 29000, option: '파랑', num: 1, state: '결제진행중'},
        ]
    },
]

const OrderChange = memo(() => {
    const { id } = useQueryString();
    const ordernum = parseInt(id);
    const navigate = useNavigate();

    // 조회 결과가 저장될 객체
    let listItem = null;

    list.some((item, index) => {
        if (item.ordernum === ordernum) {
            listItem = item;
            return true;
        } 
        return false;
    });

    // 교환/환불 상태값
    const [state, setState] = useState();

    const checkItem = document.getElementsByName('check');

    // 교환/환불 선택 시 상태값 갱신
    const changeSelect = useCallback((e) => {
        const current = e.currentTarget;
        const choose = current.selectedIndex;

        const value = current[choose].value;
        setState(value);

        checkItem.forEach((v, i) => {
            v.checked = false;
            console.log(v.checked);
        })
    }, [checkItem]);

    // 교환 시 체크박스 선택에 따라 옵션선택창 나타남
    const onClick = useCallback((e) => {
        if (state === 'exchange') {
            checkItem.forEach((v, i) => {
                const changeOP = document.querySelector(`#changeOP${i}`);

                if(v.checked === true) {
                    changeOP.style.display = 'block';
                } else if (v.checked === false) {
                    changeOP.style.display = 'none';
                }
            })
        } 
    },[checkItem, state]);

    // 취소물품가 상태값
    const [totalPrice, setTotalPrice] = useState(0);

    // 환불예정금액 (배송비 계산도 해야됨 5만원 이하면 3000원 / 하지만 0원이라면 0원)
    const selectOn = useCallback((e) => {
        if (state === 'refund') {
            const checked = Array.from(checkItem).filter((v, i) => v.checked);
            const total = checked.reduce((acc, cur) => acc + parseInt(cur.value), 0);
            setTotalPrice(total);
        }
    }, [state, checkItem]);

    // submit 이벤트
    const onSubmit = useCallback ((e) => {
        e.preventDefault();
        const regex = RegexHelper.getInstance();

        try {
            regex.value(document.querySelector('#optionCheck'), '신청 유형을 선택해주세요.');
            regex.checkMin(document.getElementsByName('check'), 1, '물품을 선택해주세요');
            document.getElementsByName('check').forEach((v, i) => {
                const changeOP = document.querySelectorAll(`#changeOP${[i]}`);
                changeOP.forEach((v1, i1) => {
                    if (v.checked === true && v1.value === '') {
                        regex.value(v1, '옵션을 체크해주세요.');
                    }
                })
            })
            regex.value(document.querySelector('#reasonCheck'), '신청 사유를 선택해주세요.');

            regex.value(document.querySelector('#text'), '신청내용을 입력해주세요.');
            regex.agree(document.querySelector('#check'), '교환/환불 동의란을 체크해주세요.');

        } catch (e) {
            window.alert(e.message);
            console.error(e);
            return;
        }
        if (window.confirm("교환/환불을 신청하시겠습니까?")) {
            alert("신청완료!");
            navigate('/mymain');
        }
    }, [navigate]);
    
    return (
        <Wrap>
            <h1>교환/환불</h1>
            <form className='orderWrap'  onSubmit={onSubmit}>
                <div className='chReOREx'>
                    <select onChange={changeSelect} id='optionCheck'>
                        <option value=''>-유형선택-</option>
                        <option value='exchange'>교환</option>
                        <option value='refund'>환불</option>
                    </select>
                </div>
                <div>
                {
                    listItem !== undefined ? (
                    listItem['item'].map((v, i) => {
                        return(
                            <div className='itemInfo' key={i}>
                                <input type="checkbox" className='check' name='check' value={v.price*v.num} onClick={onClick} onChange={selectOn}/>
                                <div className='box'>
                                    <div className='imgbox'><img src={v.img} alt='' /></div>
                                    <div className='box1'>
                                        <p>{v.name}</p>
                                        <p>{v.num} 개</p>
                                        <p>옵션</p>
                                        <p><span>- </span>{v.option}</p>
                                        <div id='box1'>
                                            { state === 'exchange' ? (
                                                <select id={`changeOP${i}`} name='option'>
                                                    <option value=''>-옵션선택-</option>
                                                    <option value='1'>옵션도</option>
                                                    <option value='2'>반복돌려서</option>
                                                    <option value='3'>해야함</option>
                                                </select>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                    <div className='review'>
                                        <p>{(v.price * v.num).toLocaleString()} 원</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    ) : (
                        <h3>데이터가 존재하지 않습니다.</h3>
                    )
                }
                </div>
                <div className='reason'>
                    <select id="reasonCheck">
                        <option value=''>-사유선택-</option>
                        <option value='1'>단순변심</option>
                        <option value='2'>주문실수</option>
                        <option value='3'>상품불량</option>
                        <option value='4'>오배송</option>
                        <option value='5'>기타</option>
                    </select>
                    <div>
                        <textarea type='text'  maxLength='100' placeholder='교환 및 환불 내용을 자세히 입력해주세요' id='text' name='text'/>
                    </div>
                </div>
                {state == 'exchange' ? (
                    <>
                    </>
                ) : (state == null || undefined ? (
                    <></>
                ) : (
                    <div>
                        <div className='refundMoney'>
                            <p>환불예정 금액 : <span>{(totalPrice).toLocaleString()} 원</span></p>
                        </div>
                    </div>
                ))}
                <div className='submitBox'>
                    <p>교환/환불 정보를 정확하게 입력하지 않을 시, <span>신청이 취소</span>될 수 있습니다.</p>
                    <div className='checkAgree'>
                        <label><input type='checkbox' id='check' name='agee'/>선택한 상품의 교환/환불에 동의합니다.</label>
                    </div>
                    <div className='button'>
                        <button type='submit'>신청</button>
                        <button type='button' onClick={(e) => navigate(-1)}>뒤로가기</button>
                    </div>
                </div>
            </form>
        </Wrap>
    );
});

export default OrderChange;
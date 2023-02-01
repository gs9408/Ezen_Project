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

const OrderCancle = memo(() => {
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

    // 취소물품가 상태값
    const [totalPrice, setTotalPrice] = useState(0);

    // 환불예정금액 (배송비 계산도 해야됨 5만원 이하면 3000원 / 하지만 0원이라면 0원)
    const selectOn = useCallback((e) => {
        const checkItem = document.querySelectorAll('.check');

        const checked = Array.from(checkItem).filter((v, i) => v.checked);
        const checkedValue = checked.map((v, i) => v.value);
        const total = checkedValue.reduce((acc, cur) => acc + parseInt(cur), 0);
        setTotalPrice(total);
    }, []);

    // submit 이벤트
    const Submit = useCallback ((e) => {
        e.preventDefault();
        const regex = RegexHelper.getInstance();

        try {
            regex.checkMin(document.querySelectorAll('.check'), 1, '물품을 선택해주세요');
            regex.agree(document.querySelector('#check'), '취소 동의란에 체크해주세요.');
        } catch (e) {
            alert(e.message);
            console.error(e);
            return;
        }
        if (window.confirm("주문을 취소하시겠습니까?")) {
            alert("취소완료!");
            navigate('/mymain');
        }
    }, [navigate]);

    return (
        <Wrap>
            <h1>주문취소</h1>
            <form className='orderWrap' onSubmit={Submit}>
                {
                    listItem !== undefined ? (
                    listItem['item'].map((v, i) => {
                        return(
                            <div className='itemInfo' key={i}>
                                <input type="checkbox" className='check' name='check' value={v.price*v.num} onChange={selectOn} />
                                <div className='box'>
                                    <div className='imgbox'><img src={v.img} alt='' /></div>
                                    <div className='box1'>
                                        <p>{v.name}</p>
                                        <p>{v.num} 개</p>
                                        <p>옵션</p>
                                        <p><span>- </span>{v.option}</p>
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
                <div className='refundMoney'>
                    <p>환불예정 금액 : <span>{(totalPrice).toLocaleString()} 원</span></p>
                </div>
                <div className='checkAgree'>
                    <input type='checkbox' id='check'/>
                    <label>선택한 상품의 주문을 취소합니다.</label>
                </div>
                <div className='button'>
                    <button type='submit'>주문취소</button>
                    <button type='button' onClick={(e) => navigate(-1)}>뒤로가기</button>
                </div>
            </form>
        </Wrap>
    );
});

export default OrderCancle;
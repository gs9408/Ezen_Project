import React, { memo } from 'react';
import Wrap from '../../assets/css/mypage/myorderdetail';
import { useQueryString } from '../../hook/useQueryString';
import StateButton from '../../components/StateButton';

import img1 from '../../assets/img/MyPage/1.webp';
import img2 from '../../assets/img/MyPage/2.webp';
import img3 from '../../assets/img/MyPage/3.webp';

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

const OrderDetail = memo(() => {
    const { id } = useQueryString();
    const ordernum = parseInt(id);
    // console.log(ordernum);

    // 조회 결과가 저장될 객체
    let listItem = null;

    list.some((item, index) => {
        if (item.ordernum === ordernum) {
            listItem = item;
            return true;
        }
        return false;
    });
    console.log(listItem);

    if (!listItem) {
        return (<h3>데이터가 존재하지 않습니다.</h3>)
    }

    // 상품의 합계와 배송비
    const Price = listItem['item'].reduce((acc, cur) => acc + (cur.price * cur.num), 0);
    const Delivery = Price >= 50000 ? 0 : 3000;

    return (
        <Wrap>
            <h3>주문상세</h3>
            <div className='state'>
                <span>{listItem.date}</span>
                <span>주문번호 {listItem.ordernum}</span>
            </div>
            <p className='itemstate'>{listItem.state}</p>

            <div>
                {listItem['item'].map((v, i) => {
                    return (
                        <div className='itemInfo' key={i}>
                            <div>
                                <div className='imgbox'><img src={v.img} alt='' /></div>
                                <div className='box1'>
                                    <p>{v.name}</p>
                                    <p>{v.num} 개</p>
                                    <p>옵션</p>
                                    <p><span>- </span>{v.option}</p>
                                </div>
                                <div className='box2'>
                                    <p>{(v.price * v.num).toLocaleString()} 원</p>
                                </div>
                            </div>
                            <div className='review'>
                                <StateButton state={listItem.state} id={listItem.ordernum}/>
                            </div>
                        </div>
                    )
                })}
            </div>
            

            <div className='userinfo'>
                <h3>수령인 정보</h3>
                <div>
                    <ul>
                        <li>수령인</li>
                        <li>연락처</li>
                        <li>배송주소지</li>
                        <li>배송요청사항</li>
                    </ul>
                    <ul>
                        <li>김가나다</li>
                        <li>010-1234-5678</li>
                        <li>서울시 강남구 테헤란로25길 34</li>
                        <li>배송 전 연락부탁</li>
                    </ul>
                </div>
            </div>

            <div className='payinfo'>
                <h3>결제 정보</h3>
                <div className='paywrap flex_between'>
                    <ul className='payment'>
                        <li>결제수단</li>
                        <li>카드결제</li>
                        <li>신한카드 / <span>일시불</span></li>
                    </ul>
                    <div className='amount'>
                        <div className='border flex_between'>
                            <ul>
                                <li>상품 금액</li>
                                <li>배송비</li>
                                <li>총 금액</li>
                            </ul>
                            <ul>
                                <li>{Price.toLocaleString()} 원</li>
                                <li>{Delivery.toLocaleString()} 원</li>
                                <li>{(Price + Delivery).toLocaleString()} 원</li>
                            </ul>
                        </div>
                        <div className='flex_between'>
                            <p>카드결제</p>
                            <p>{(Price + Delivery).toLocaleString()} 원</p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrap>
    );
});

export default OrderDetail;
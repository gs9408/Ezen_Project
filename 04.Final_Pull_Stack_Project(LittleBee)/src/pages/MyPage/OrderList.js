import React, { memo, useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';
import StateButton from '../../components/StateButton';

// CSS
import Table from '../../assets/css/mypage/Table';
import Wrap from '../../assets/css/mypage/mypage';

import img1 from '../../assets/img/MyPage/1.webp';
import img2 from '../../assets/img/MyPage/2.webp';
import img3 from '../../assets/img/MyPage/3.webp';

const list = [
    {date: '2022.11.10', img: img1, name: '귀여운 고양이 접시 외 2', price: '132,000', state: '결제진행중', ordernum:2022111701},
    {date: '2022.11.10', img: img2, name: '못생긴 나무늘보 쿠션 외 2', price: '79,000', state: '결제완료', ordernum:2022111702},
    {date: '2022.11.10', img: img3, name: '특색없는 담요 외 2', price: '29,000', state: '배송준비중', ordernum:2022111703},
    {date: '2022.11.10', img: img3, name: '특색없는 담요 외 2', price: '29,000', state: '배송중', ordernum:2022111707},
    {date: '2022.11.10', img: img1, name: '귀여운 고양이 접시 외 2', price: '132,000', state: '배송완료', ordernum:2022111704},
    {date: '2022.11.10', img: img2, name: '못생긴 나무늘보 쿠션 외 2', price: '79,000', state: '환불', ordernum:2022111705},
    {date: '2022.11.10', img: img2, name: '못생긴 나무늘보 쿠션 외 2', price: '79,000', state: '교환', ordernum:2022111705},
    {date: '2022.11.10', img: img3, name: '특색없는 담요 외 2', price: '29,000', state: '취소', ordernum:2022111706},
]

const OrderList = memo(() => {
    // 월별 검색필터
    const day = dayjs();

    const [myDate, setMyDate] = useState({
        startDate: day.format('YYYY-MM-DD'),
        endDate: day.format('YYYY-MM-DD')
    });

    console.log(myDate.startDate);

    const onSetDate = useCallback((e) => {
        const target = e.target;

        const month = target.value;

        if (month == 1) {
            setMyDate({...myDate, startDate: day.add(-1,'M').format('YYYY-MM-DD')});
        } else if (month == 3) {
            setMyDate({...myDate, startDate: day.add(-3,'M').format('YYYY-MM-DD')});
        } else {
            setMyDate({...myDate, startDate: day.add(-6,'M').format('YYYY-MM-DD')});
        }

    }, [myDate]);

    // useEffect(() => {
    //     if (list.)
    // }, [])

    return (
        <Wrap>
            <div className='orderList1' >
                <h2>주문내역 조회</h2>
                <div className='search_box'>
                    <select>
                        <option>전체 주문상태</option>
                        <option>결제진행중</option>
                        <option>결제완료</option>
                        <option>배송준비중</option>
                        <option>배송중</option>
                        <option>배송완료</option>
                        <option>교환</option>
                        <option>환불</option>
                        <option>취소</option>

                    </select>
                    <div>
                        <button type='button' value='1' onClick={onSetDate} >1개월</button>
                        <button type='button' value='3' onClick={onSetDate} >3개월</button>
                        <button type='button' value='6' onClick={onSetDate} >6개월</button>
                    </div>
                    <input type='date' defaultValue={myDate.startDate}/>
                </div>
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>주문번호</th>
                                <th>주문일자</th>
                                <th colSpan='2'>주문명</th>
                                <th>주문금액</th>
                                <th>상태</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((v, i) => {
                                return(
                                    <tr key={i}>
                                        <td className='order'><NavLink to={`/mymain/orderdetail?id=${v.ordernum}`}>{v.ordernum}</NavLink></td>
                                        <td>{v.date}</td>
                                        <td className='img'><img src={v.img} alt=''/></td>
                                        <td className='name'><NavLink to={`/mymain/orderdetail?id=${v.ordernum}`}>{v.name}</NavLink></td>
                                        <td>{v.price} 원</td>
                                        <td>
                                            {v.state}
                                        </td>
                                        <td className='after'>
                                            <StateButton state={v.state} id={v.ordernum} />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
            
        </Wrap>
    );
});

export default OrderList;
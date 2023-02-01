import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import StateButton from '../../components/StateButton';

// CSS
import Wrap from "../../assets/css/mypage/mypage";
import Table from "../../assets/css/mypage/Table";

import img1 from "../../assets/img/MyPage/1.webp";
import img2 from "../../assets/img/MyPage/2.webp";
import img3 from "../../assets/img/MyPage/3.webp";

const list = [
  {ordernum: 2022111701,
      date: '2022.11.10',
      state: '결제진행중',
      item: [
          { img: img1, name: '귀여운 고양이 접시', price: '132,000', option: '파랑', state: '배송중' },
          { img: img2, name: '못생긴 나무늘보 쿠션', price: '132,000', option: '나무늘보', state: '배송준비중' },
          { img: img3, name: '특색없는 담요', price: '132,000', option: '나무', state: '배송중' }
      ]
  },
  {ordernum: 2022111702,
      date: '2022.11.10',
      state: '결제완료',
      item: [
          {img: img2, name: '못생긴 나무늘보 쿠션', price: '79,000', option: '나무늘보', state: '배송준비중'},
          {img: img3, name: '특색없는 담요', price: '79,000', option: '나무', state: '배송준비중'},
          {img: img1, name: '귀여운 고양이 접시', price: '79,000', option: '파랑', state: '배송준비중'},
      ]
  },
  {ordernum: 2022111703,
      date: '2022.11.10',
      state: '배송준비중',
      item: [
          {img: img3, name: '특색없는 담요', price: '29,000', option: '나무', state: '결제진행중'},
          {img: img1, name: '귀여운 고양이 접시', price: '29,000', option: '파랑', state: '결제진행중'},
          {img: img2, name: '못생긴 나무늘보 쿠션', price: '29,000', option: '나무늘보', state: '결제진행중'},
      ]
  },
  {ordernum: 2022111704,
      date: '2022.11.10',
      state: '배송중',
      item: [
          { img: img1, name: '귀여운 고양이 접시', price: '132,000', option: '파랑',state: '배송중' },
          { img: img3, name: '특색없는 담요', price: '132,000', option: '나무', state: '배송준비중' },
          { img: img2, name: '못생긴 나무늘보 쿠션', price: '132,000', option: '나무늘보', state: '배송중' }
      ]
  },
  {ordernum: 2022111705,
      date: '2022.11.10',
      state: '배송완료',
      item: [
          {img: img2, name: '못생긴 나무늘보 쿠션', price: '79,000', option: '나무늘보', state: '배송준비중'},
          {img: img1, name: '귀여운 고양이 접시', price: '79,000', option: '파랑', state: '배송준비중'},
          {img: img3, name: '특색없는 담요', price: '79,000', option: '나무', state: '배송준비중'},
      ]
  },
  {ordernum: 2022111706,
      date: '2022.11.10',
      state: '환불',
      item: [
          {img: img3, name: '특색없는 담요', price: '29,000', option: '나무', state: '결제진행중'},
          {img: img2, name: '못생긴 나무늘보 쿠션', price: '29,000', option: '나무늘보', state: '결제진행중'},
          {img: img1, name: '귀여운 고양이 접시', price: '29,000', option: '파랑', state: '결제진행중'},
      ]
  },
]

const MyPage = memo(() => {

  return (
    <Wrap>
        <NavLink to="orderlist" className="navlink">
          +더보기
        </NavLink>
        <div className="order_list">
          <h3>주문 / 배송현황</h3>

          <Table>
            <thead>
              <tr>
                <th>주문번호</th>
                <th colSpan='2'>상품명</th>
                <th>옵션</th>
                <th>수량</th>
                <th>가격</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {list[0].item.map((v, i) => {
                return (
                  <tr key={i}>
                    <td>{list[0].ordernum}</td>
                    <td className="img">
                      <img src={v.img} alt={v.img} />
                    </td>
                    <td className="name">{v.name}</td>
                    <td>{v.option}</td>
                    <td>1 개</td>
                    <td>{v.price} 원</td>
                    {v.state == '배송중' ?
                      <td className='option'>
                          {v.state}
                          <button type='button'>배송조회</button>
                      </td> :
                      <td>
                          {v.state}
                      </td>
                    }
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        <div className="order_list">
          <h3>최근 주문내역</h3>
          <Table>
            <thead>
              <tr>
                <th>주문번호</th>
                <th>주문일자</th>
                <th colSpan='2'>주문명</th>
                <th>주문금액</th>
                <th>상태</th>
                <th>후기작성</th>
              </tr>
            </thead>
            <tbody>
              {list.map((v, i) => {
                return (
                  <tr key={i}>
                    <td className="order"><NavLink to={`orderdetail?id=${v.ordernum}`}>{v.ordernum}</NavLink></td>
                    <td>{v.date}</td>
                    <td className="img"><img src={v.item[0].img} alt=''/></td>
                    <td className="name"><NavLink to={`orderdetail?id=${v.ordernum}`}>{v.item[0].name} 외 {v.item.length-1}</NavLink></td>
                    <td>{v.item[0].price} 원</td>
                    <td>
                        {v.state}
                    </td>
                    <td className="after">
                      <StateButton state={v.state} id={v.ordernum} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
    </Wrap>
  );
});

export default MyPage;

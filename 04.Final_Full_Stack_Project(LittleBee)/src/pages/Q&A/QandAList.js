import React, { memo, useCallback, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import QandAStyle from '../../assets/css/Notice_Q&A/QandAStyle';
import QandATable from '../../assets/css/Notice_Q&A/QandATable';

const qandalist = [
    {
        id: '010', kategorie: '카테고리1', user: '작성자10', title: 'Q&A10', text: 'Q&A10 내용', date: '2022-11-25 09:00:00'
    },
    {
        id: '009', kategorie: '카테고리3', user: '작성자09', title: 'Q&A09', text: 'Q&A09 내용', date: '2022-11-24 09:00:00'
    },
    {
        id: '008', kategorie: '카테고리2', user: '작성자08', title: 'Q&A08', text: 'Q&A08 내용', date: '2022-11-23 09:00:00'
    },
    {
        id: '007', kategorie: '카테고리1', user: '작성자07', title: 'Q&A07', text: 'Q&A07 내용', date: '2022-11-22 09:00:00'
    },
    {
        id: '006', kategorie: '카테고리3', user: '작성자06', title: 'Q&A06', text: 'Q&A06 내용', date: '2022-11-21 09:00:00'
    }, 
    {
        id: '005', kategorie: '카테고리2', user: '작성자05', title: 'Q&A05', text: 'Q&A05 내용', date: '2022-11-20 09:00:00'
    },
    {
        id: '004', kategorie: '카테고리1', user: '작성자04', title: 'Q&A04', text: 'Q&A04 내용', date: '2022-11-19 09:00:00'
    },
    {
        id: '003', kategorie: '카테고리3', user: '작성자03', title: 'Q&A03', text: 'Q&A03 내용', date: '2022-11-18 09:00:00'
    },
    {
        id: '002', kategorie: '카테고리2', user: '작성자02', title: 'Q&A02', text: 'Q&A02 내용', date: '2022-11-17 09:00:00'
    },
    {
        id: '001', kategorie: '카테고리1', user: '작성자01', title: 'Q&A01', text: 'Q&A01 내용', date: '2022-11-16 09:00:00'
    }
]

const qandanum = Math.ceil(qandalist.length / 4);

const QandAList = memo(() => {
    const navigate = useNavigate();

    useEffect(() => {
        let i = 0;
        const pagenum_box = document.querySelector('.pagenum_box');
        if (qandalist.length > 0) {
            for (i = 0; i < qandanum; i++) {
                let pagenum_a = document.createElement('a');
                let pagenum = document.createElement('span');
                pagenum_a.setAttribute('class' , 'pagenum_a');
                pagenum.setAttribute('class' , 'pagenum');
                pagenum_a.href = "#";
                pagenum.innerHTML = i + 1;
                pagenum_box.appendChild(pagenum_a);
                pagenum_a.appendChild(pagenum);
            }
        }
    }, []);

    const onSearch = useCallback((e) => {
        alert('검색버튼 누름');
    }, []);

    const onQandAClick = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const { id } = current.dataset;

        navigate(`/qna?id=${id}`);
    }, []);

    const onMoreClick = useCallback((e) => {
        alert('더보기버튼 누름');
    }, [])

    return (
        <QandAStyle>
            <h1>Q&A</h1>
            <form onSubmit={onSearch}>
                <select className='button'>
                    <option value='01'>--------------------</option>
                    <option value='02'>반품/교환/환불/AS</option>
                    <option value='03'>회원정보/로그인</option>
                    <option value='04'>주문/결제/배송</option>
                    <option value='05'>이벤트/당첨내역</option>
                    <option value='06'>기타</option>
                </select>
                <input type='text' placeholder='Search...' className='input_text' />
                <button type='submit' className='button_submit'><i className="fa-solid fa-magnifying-glass" /></button>
                <NavLink to='/qnaedit' className='write_button'>글쓰기</NavLink>
            </form>
            <QandATable>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>카테고리</th>
                        <th>작성자</th>
                        <th>제목</th>
                        <th>작성시간</th>
                    </tr>
                </thead>
                <tbody>
                    {qandalist.length > 0 ? (
                        qandalist.map((v, i) => {
                            return (
                                <tr key={v.id} data-id={v.id} onClick={onQandAClick}>
                                    <td>{v.id}</td>
                                    <td>{v.kategorie}</td>
                                    <td>{v.user}</td>
                                    <td>{v.title}</td>
                                    <td>{v.date}</td>
                                </tr>
                            )
                        })
                    ) : (
                        <tr>
                            <td>
                                검색결과가 없습니다.
                            </td>
                        </tr>
                    )}
                </tbody>
            </QandATable>
            <div onClick={onMoreClick} className='more_button'>더보기 ▽</div>
            <div className='number'>
                <a href='#' className='start'>
                    <span>&#60;&#60; </span>
                    <span>맨앞</span>
                </a>
                <a href='#' className='pre'>
                    <span>&#60; </span>
                    <span>이전</span>
                </a>
                <div className='pagenum_box'>

                </div>
                <a href='#' className='next'>
                    <span>다음</span>
                    <span> &#62;</span>
                </a>
                <a href='#' className='end'>
                    <span>맨뒤</span>
                    <span> &#62;&#62;</span>
                </a>
            </div>
        </QandAStyle>
    );
});

export default QandAList;
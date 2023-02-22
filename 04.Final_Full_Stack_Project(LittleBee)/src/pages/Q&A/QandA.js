import React, { memo, useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import PostStyle from '../../assets/css/Notice_Q&A/PostStyle';

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

const QandA = memo(() => {
    const location = useLocation();
    const { search } = location;
    const query = new URLSearchParams(search);
    const id = parseInt(query.get('id'));

    const item = useMemo(() => {
        if (qandalist) {
            return qandalist.find((v, i) => v.id == id);
        }
    }, [id]);

    const onNextClick = useCallback((e) => {
        alert('다음 글 클릭');
    }, [])
    
    const onPrevClick = useCallback((e) => {
        alert('이전 글 클릭');
    }, [])

    return (
        <PostStyle>
            <h1>Q&A</h1>
            <div className='page'>
                <h2>{item.title}</h2>
                <hr />
                <p className='date'>{item.date}</p>
                <hr />
                <p className='text'>{item.text}</p>
            </div>
            <div className='next_page' onClick={onNextClick}>
                <span>다음 글</span>
                <p>다음글제목</p>
            </div>
            <div className='next_page' onClick={onPrevClick}>
                <span>이전 글</span>
                <p>이전글제목</p>
            </div>
        </PostStyle>
    );
});

export default QandA;
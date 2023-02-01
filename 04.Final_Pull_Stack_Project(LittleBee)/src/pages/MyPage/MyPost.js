import React, { memo } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { NavLink, Routes, Route } from "react-router-dom";
import Mypost from '../../assets/css/mypage/mypost';
import MyQnA from './MyQnA';
import MyReview from './MyReview';
import MyReviewPage from './MyReviewPage';

const MyPost = memo(() => {
    useEffect((e) => {
        const qna = document.querySelector('.qna');
        qna.classList.add('active');
    }, []);

    const onReviewClick = useCallback((e) => {
        const qna = document.querySelector('.qna');
        qna.classList.remove('active');
    }, []);

    return (
        <Mypost>
            <h1>나의 게시글</h1>
            <div className='post'>
                <NavLink to="myqna" className='nav qna'>나의 QnA</NavLink>
                <NavLink to="myreview" className='nav' onClick={onReviewClick}>나의 Review</NavLink>
                <Routes>
                    <Route path="/" exapt={true} element={<MyQnA />} />
                    <Route path="/myqna" element={<MyQnA />} />
                    <Route path="/myreview" element={<MyReview />} />
                    <Route path="/myreviewpage" element={<MyReviewPage />} />
                </Routes>
            </div>
        </Mypost>
    );
});

export default MyPost;
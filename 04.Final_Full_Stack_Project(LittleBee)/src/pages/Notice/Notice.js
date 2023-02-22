import React, { memo, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useQueryString } from '../../hook/useQueryString';
import dayjs from 'dayjs';

import { getItem } from "../../slices/NoticeSlice";

import PostStyle from '../../assets/css/Notice_Q&A/PostStyle';

const Notice = memo(() => {
    const { data, loading, error } = useSelector((state) => state.NoticeSlice);

    const dispatch = useDispatch();
    const { noticenum } = useQueryString();

    useEffect(() => {
        console.log(noticenum);
        dispatch(getItem({
            noticenum: noticenum
        }));
    }, [dispatch, noticenum]);

    const onNextClick = useCallback((e) => {
        alert('다음 글 클릭');
    }, [])
    
    const onPrevClick = useCallback((e) => {
        alert('이전 글 클릭');
    }, [])

    return (
        <PostStyle>
            <h1>공지사항</h1>
            <div className='page'>
                <h2>{data.noticetitle}</h2>
                <hr />
                <p className='date'>{dayjs(data.noticedate).format('YYYY-MM-DD hh:mm')}</p>
                <hr />
                <p className='text'>{data.noticecontent}</p>
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

export default Notice;
import React, { memo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useQueryString } from "../../hook/useQueryString";
import dayjs from 'dayjs';

import { getList } from "../../slices/NoticeSlice";

import NoticeStyle from '../../assets/css/Notice_Q&A/NoticeStyle';
import Table from '../../assets/css/Notice_Q&A/Table';

const NoticeList = memo(() => {
    const { data, pagenation, loading, error } = useSelector((state) => state.NoticeSlice);

    const { noticecategory, noticetitle } = useQueryString();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getList({
            noticecategory: noticecategory,
            noticetitle: noticetitle
        }));
    }, [dispatch, noticecategory, noticetitle]);

    const onSearch = useCallback((e) => {
        e.preventDefault();
        const button = document.querySelector('.button');
        const input_text = document.querySelector('.input_text');
        navigate(`/noticelist/?noticecategory=${button.value}&noticetitle=${input_text.value}`);
    }, []);

    const onMoreClick = useCallback((e) => {
        alert('더보기버튼 누름');
    }, []);

    const onNoticeClick = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const { id } = current.dataset;

        navigate(`/notice?noticenum=${id}`);
    }, []);

    return (
        <NoticeStyle>
            <h1>공지사항</h1>
            <form onSubmit={onSearch}>
                <select className='button'>
                    <option value=''>------------</option>
                    <option value='이벤트'>이벤트</option>
                    <option value='당첨자발표'>당첨자발표</option>
                    <option value='공지사항'>공지사항</option>
                </select>
                <input type='text' placeholder='Search...' className='input_text' />
                <button type='submit' className='button_submit'><i className="fa-solid fa-magnifying-glass" /></button>
            </form>
            <Table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>카테고리</th>
                        <th>제목</th>
                        <th>작성시간</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {pagenation > 0 ? (
                        data.map((v, i) => {
                            return (
                                <tr key={v.noticenum} data-id={v.noticenum} onClick={onNoticeClick}>
                                    <td>{v.noticenum}</td>
                                    <td>{v.noticecategory}</td>
                                    <td>{v.noticetitle}</td>
                                    <td>{v.noticedate}</td>
                                </tr>
                            )
                        })
                    ) : (
                        <tr>
                            <td className='no_notice' colSpan={4}>
                                공지사항이 없습니다.
                            </td>
                        </tr>
                    )} */}
                    {data?.map((v, i) => {
                        return (
                            <tr key={v.noticenum} data-id={v.noticenum} onClick={onNoticeClick}>
                                <td>{v.noticenum}</td>
                                <td>{v.noticecategory}</td>
                                <td>{v.noticetitle}</td>
                                <td>{dayjs(v.noticedate).format('YYYY-MM-DD hh:mm')}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <div onClick={onMoreClick} className='more_button'>더보기 ▽</div>
        </NoticeStyle>
    );
});

export default NoticeList;
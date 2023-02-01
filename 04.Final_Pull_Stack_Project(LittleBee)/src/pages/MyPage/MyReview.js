import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import MyQRTable from '../../assets/css/mypage/MyQRTable';

const reviewlist = [
    {
        id: '005', product: '1113', user: '내 ID', title: 'Review05', text: 'Review05 내용', date: '2022-11-20 09:00:00'
    },
    {
        id: '004', product: '5464', user: '내 ID', title: 'Review04', text: 'Review04 내용', date: '2022-11-19 09:00:00'
    },
    {
        id: '003', product: '8974', user: '내 ID', title: 'Review03', text: 'Review03 내용', date: '2022-11-18 09:00:00'
    },
    {
        id: '002', product: '2574', user: '내 ID', title: 'Review02', text: 'Review02 내용', date: '2022-11-17 09:00:00'
    },
    {
        id: '001', product: '7643', user: '내 ID', title: 'Review01', text: 'Review01 내용', date: '2022-11-16 09:00:00'
    }
]

const MyReview = memo(() => {
    const navigate = useNavigate();

    const onReviewClick = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const { id } = current.dataset;

        navigate(`/mymain/mypost/myreviewpage?id=${id}`);
    }, []);

    return (
        <MyQRTable>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>상품번호</th>
                    <th>작성자</th>
                    <th>제목</th>
                    <th>작성시간</th>
                </tr>
            </thead>
            <tbody>
                {reviewlist.length > 0 ? (
                    reviewlist.map((v, i) => {
                        return (
                            <tr key={v.id} data-id={v.id} onClick={onReviewClick}>
                                <td>{v.id}</td>
                                <td>{v.product}</td>
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
        </MyQRTable>
    );
});

export default MyReview;
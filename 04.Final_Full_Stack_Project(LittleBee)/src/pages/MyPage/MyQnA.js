import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import MyQRTable from '../../assets/css/mypage/MyQRTable';

const qandalist = [
    {
        id: '005', kategorie: '카테고리2', user: '내 ID', title: 'Q&A05', text: 'Q&A05 내용', date: '2022-11-20 09:00:00'
    },
    {
        id: '004', kategorie: '카테고리1', user: '내 ID', title: 'Q&A04', text: 'Q&A04 내용', date: '2022-11-19 09:00:00'
    },
    {
        id: '003', kategorie: '카테고리3', user: '내 ID', title: 'Q&A03', text: 'Q&A03 내용', date: '2022-11-18 09:00:00'
    },
    {
        id: '002', kategorie: '카테고리2', user: '내 ID', title: 'Q&A02', text: 'Q&A02 내용', date: '2022-11-17 09:00:00'
    },
    {
        id: '001', kategorie: '카테고리1', user: '내 ID', title: 'Q&A01', text: 'Q&A01 내용', date: '2022-11-16 09:00:00'
    }
]

const MyQnA = memo(() => {
    const navigate = useNavigate();

    const onQandAClick = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const { id } = current.dataset;

        navigate(`/qna?id=${id}`);
    }, []);

    return (
        <MyQRTable>
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
        </MyQRTable>
    );
});

export default MyQnA;
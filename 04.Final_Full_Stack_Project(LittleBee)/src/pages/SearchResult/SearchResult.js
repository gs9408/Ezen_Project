import React, { memo, useState, useEffect }from 'react';
import ProductListContainer from '../../assets/css/Product/ProductsList';
import { useSelector, useDispatch } from "react-redux";
import { getSearchList } from "../../slices/ProductSlice";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useQueryString } from '../../hook/useQueryString';

const SearchArea = styled.div`
    text-align: center;
    margin: 20px 20px;
    color: #777;
    border: 4px solid #c9e6f6;
    padding: 20px 0;
`;

const SearchResult = memo(() => {
    /** 데이터 갱신을 위한 상태값 */
    const [init, setInit] = useState(false);

    /** QueryString 변수 받기 */
    const { query } = useQueryString();

    /** 리덕스 관련 코드 */
    const dispatch = useDispatch();
    const { pagenation, data, loading, error } = useSelector((state) => state.ProductSlice);

    /** 최초 마운트시 리덕스를 통해 목록을 조회 */
    // 화면 새로고침에 대한 상태값이 변경된다면 데이터를 새로 로드
    useEffect(() => {
        dispatch(getSearchList({
            query: query
        })).then(()=>{
            setInit(true);
        })
    }, [query, init]);
    console.log(data);

    let length = '';
    if (Array.isArray(data)) {
        length = data.length;
        console.log(data);
        console.log(Array.isArray(data));
    }

    return (
        <div>
            <SearchArea>
                <h3>'{query}'의 검색 결과 {length}개</h3>
            </SearchArea>
            <ProductListContainer>
                {init && data?.map((v, i) => {
                        return (
                            <NavLink key={i} to={`/goods/10/${v.prodnum}`}>
                                <li key={i}>
                                    <img src={v.thumbnail} alt='' />
                                    <p className='title'>{v.prodname}</p>
                                    <div className='line'></div>
                                    <p className='price'>₩ {v.prodprice.toLocaleString()}</p>
                                </li>
                            </NavLink>
                        )
                    })}
            </ProductListContainer>
        </div>
    );
});

export default SearchResult;
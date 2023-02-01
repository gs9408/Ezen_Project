import React, {memo, useCallback, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useQueryString } from '../hook/useQueryString';
import { getList, getSearchList } from '../slices/ProductSlice';
import { useDispatch } from 'react-redux';
import SearchResult from '../pages/SearchResult/SearchResult';

const Navigate = styled.nav`
    /* border-bottom: 1px solid #002; */
    width: 980px;
    margin: auto;
    padding: 10px;
    margin-top: 15px;
    overflow: hidden;
    
    div {
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;
        padding: 10px;
        box-sizing: border-box;
    }
    .searchForm {
        text-align: center;
        
        & input {
            padding: 5px 20px;
            border: none;
            border-bottom: 1px solid #000;
            height: 20px;
            width: 150px;
        }
        & .btn {
            padding: 5px;
            background: none;
            border: none;
            
            &:hover {
                cursor: pointer;
            }
        }
    }

    .nav {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        color: #777;
        padding: 10px 20px;
        box-sizing: border-box;
        
        &:hover {
             color: #a1bece;
             transition: 0.3s;
         }

         &:last-child {
            &:after {
                /* 글자색을 흰색으로 지정하여 화면에서 숨긴다 */
                color: #fff;
            }
        }
    }
`;

const Nav = memo(() => {
    const navigate = useNavigate();
    const { query } = useQueryString();
    const dispatch = useDispatch();

    const location = useLocation();
    const CategoryLoc = location.pathname.substring(10, 12);
    // console.log(CategoryLoc);
    
    const onSearchResult = useCallback((e) => {
        e.preventDefault();
        
        const query = e.currentTarget.query.value;

        if (query == '' || null || undefined) {
            window.alert("검색어를 입력하세요!");

            return;
        }
        
        
        dispatch(getSearchList({
            query: query
        }));
        let redirectUrl = `/search?query=${query}`;
        navigate(redirectUrl);
    }, [navigate, query]);

    // const location = useLocation();
    // console.log(location.pathname);
    // const locationArr = location.pathname.split("/")
    // console.log(locationArr);

    const onDataBackupB_C = useCallback((e) => {
        e.preventDefault();
            dispatch(getList({
                category: "10"
            }))
            navigate(`/products/10`);
    }, [])

    const onDataBackupFood = useCallback((e) => {
        e.preventDefault();
        dispatch(getList({
            category: "11"
        }))
        navigate(`/products/11`);
    }, [])

    const onDataBackupSkin = useCallback((e) => {
        e.preventDefault();
        dispatch(getList({
            category: "12"
        }))
        navigate(`/products/12`);
    }, [])

    return (
        <div>
            <Navigate>
                <div>
                    <form className='searchForm' onSubmit={onSearchResult}>
                        <input type='text' placeholder='search..' className='searchArea' name="query" defaultValue={query} />
                        <button type='submit' className='btn'><i className="fa-solid fa-magnifying-glass" /></button>
                    </form>
                    <NavLink to='/products/10' className='nav' state='bedding' onClick={onDataBackupB_C}>신생아 침구/섬유류</NavLink>
                    <NavLink to='/products/11' className='nav' onClick={onDataBackupFood}>수유/이유식용품</NavLink>
                    <NavLink to='/products/12' className='nav' onClick={onDataBackupSkin}>스킨케어</NavLink>
                    <NavLink to='/noticelist' className='nav'>공지사항</NavLink>
                    <NavLink to='/qnalist' className='nav'>Q&A</NavLink>
                </div>
            </Navigate>
        </div>
    );
});

export default Nav;
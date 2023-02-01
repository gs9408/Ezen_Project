import React, { memo, useCallback, useEffect } from 'react';
import { useLocation, NavLink, Routes, Route, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useQueryString } from '../../hook/useQueryString';

import FoodProducts from '../Category/FoodProducts';
import BeddingCloth from '../Category/BeddingCloth';
import SkinCare from './SkinCare';
import SearchResult from '../SearchResult/SearchResult';
import { getSort } from '../../slices/ProductSlice';

import ProductsContainer from '../../assets/css/Product/ProductsContainer';
import ProductSort from '../../assets/css/Product/ProductSort';


const Products = memo(() => {
    const dispatch = useDispatch();
    const {value} = useQueryString();

    const location = useLocation();
    const CategoryLoc = location.pathname.substring(10, 12);

    const {'*': subcategory} = useParams();
    console.log(subcategory);

    const onMenuItemClick = useCallback((e) => {
        e.preventDefault();
        const current = e.currentTarget;

        const content = current.parentElement.querySelector('.sub');

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }
        else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }    
    }, []);

    useEffect(() => {
        // console.log("value값 바뀜 --> " + value)

        dispatch(getSort({
            category: CategoryLoc,
            value: value
        }))
    }, [CategoryLoc, value]);

    return (
        <div>
            <ProductSort>
                <NavLink to={`/products/${subcategory}?value=desc`} className='sortBtn'>높은 가격순</NavLink>
                <NavLink to={`/products/${subcategory}?value=asc`} className='sortBtn'>낮은 가격순</NavLink>

            </ProductSort>
            <ProductsContainer>
                <div className='categoryBox'>
                    <ul className='categoryBoxSub'>
                        <h1 className='collapse-content'>Shop By</h1>
                        <li className='menuItem'>
                            <a href='#!' className='link title' onClick={onMenuItemClick}>신생아 침구/섬유류</a>
                            <ul className='sub'>
                                <li><NavLink to='/products/10/20' className='link'>이불/요/베개</NavLink></li>
                                <li><NavLink to='/products/10/21' className='link'>신생아 의류</NavLink></li>
                                <li><NavLink to='/products/10/22' className='link'>손수건</NavLink></li>
                                <li><NavLink to='/products/10/23' className='link'>목욕타월/가운</NavLink></li>
                                <li><NavLink to='/products/10/24' className='link'>턱받이</NavLink></li>
                            </ul>
                        </li>
                        <li className='menuItem'>
                            <a href='#!' className='link title' onClick={onMenuItemClick}>수유/이유식용품</a>
                            <ul className='sub'>
                                <li><NavLink to='/products/11/30' data-category="30"  className='link'>젖병/젖꼭지</NavLink></li>
                                <li><NavLink to='/products/11/31' data-category="31" className='link' >치발기</NavLink></li>
                                <li><NavLink to='/products/11/32' data-category="32" className='link' >분유케이스/저장팩</NavLink></li>
                                <li><NavLink to='/products/11/33' data-category="33" className='link' >소독기/건조대</NavLink></li>
                                <li><NavLink to='/products/11/34' data-category="34" className='link' >빨대컵/보온병</NavLink></li>
                            </ul>
                        </li>
                        <li className='menuItem'>
                            <a href='#!' className='link title' onClick={onMenuItemClick}>스킨케어</a>
                            <ul className='sub'>
                                <li><NavLink to='/products/12/40' className='link' data-category="40" >로션/크림</NavLink></li>
                                <li><NavLink to='/products/12/41' className='link' data-category="41" >샴푸/바스</NavLink></li>
                                <li><NavLink to='/products/12/42' className='link' data-category="42" >파우더</NavLink></li>
                                <li><NavLink to='/products/12/43' className='link' data-category="43" >선크림/선케어</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='route'>
                    <Routes>
                        <Route path='11/*' element={<FoodProducts />} />
                        <Route path='10/*' element={<BeddingCloth />} />
                        <Route path='12/*' element={<SkinCare />} />
                        <Route path='/*' element={<SearchResult />} />
                    </Routes>
                </div>
            </ProductsContainer>
        </div>
    );
});

export default Products;
import React, { memo, useState, useCallback, useEffect }from 'react';
import ProductListContainer from '../../assets/css/Product/ProductsList';
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../../slices/ProductSlice";
import { useLocation, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const BeddingCloth = memo(() => {
    // 데이터 갱신을 위한 상태값
    const [init, setInit] = useState(false);

    /** 리덕스 관련 코드 */ 
    const dispatch = useDispatch();
    const { data, error } = useSelector((state) => state.ProductSlice);

    const location = useLocation();
    const CategoryLoc = location.pathname.substring(10, 12);
    // console.log(CategoryLoc);
    
    const {'*': subcategory} = useParams();
    console.log(subcategory);

    // 최초 마운트시 목록조회
    useEffect(() => {
        dispatch(getList({
            category: CategoryLoc,
        })).then(()=>{
            setInit(true);
        })
    }, [init]);
    
    let subB_C = '';

    if (Array.isArray(data)) {
        subB_C = data?.filter((e) => e.subcategory_subcategorynum == subcategory);
    }
    // console.log(subB_C);

    return (
        <div>
            <ProductListContainer>
                {error ? (
                    <h1>새로고침 하십시오.</h1>
                ) : (
                    subcategory == '' || subcategory == isNaN(subcategory) || subB_C == '' ? (
                        (init && data?.map((v, i) => {
                            return (
                                <NavLink key={i} to={`/goods/bedding/${v.prodnum}`}>
                                    <li key={i}>
                                        <img src={v.thumbnail} alt='' />
                                        <p className='title'>{v.prodname}</p>
                                        <div className='line'></div>
                                        <p className='price'>₩ {v.prodprice.toLocaleString()}</p>
                                    </li>
                                </NavLink>
                            )
                        }))
                    ) : (
                        (init && subB_C?.map((v, i) => {
                            return (
                                <NavLink key={i} to={`/goods/bedding/${v.prodnum}`}>
                                    <li key={i}>
                                        <img src={v.thumbnail} alt='' />
                                        <p className='title'>{v.prodname}</p>
                                        <div className='line'></div>
                                        <p className='price'>₩ {v.prodprice.toLocaleString()}</p>
                                    </li>
                                </NavLink>
                            )
                        }))
                    )
                )}
            </ProductListContainer>
        </div>
    );
});

export default BeddingCloth;
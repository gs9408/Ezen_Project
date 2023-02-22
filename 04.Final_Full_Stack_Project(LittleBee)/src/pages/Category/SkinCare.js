import React, { memo, useState, useCallback, useEffect }from 'react';
import ProductListContainer from '../../assets/css/Product/ProductsList';
import { useSelector, useDispatch } from "react-redux";
import { getList, getSort} from "../../slices/ProductSlice";
import { useNavigate } from 'react-router-dom';
import { useLocation, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQueryString } from '../../hook/useQueryString';

const SkinCare = memo(() => {
    // 데이터 갱신을 위한 상태값
    const [init, setInit] = useState(false);
    // console.log(`init = ${init}`);

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
            category: CategoryLoc
        })).then(()=>{
            setInit(true);
        })
    }, [init]);
    
    let subSkin = '';
    
    if (Array.isArray(data)) {
        subSkin = data.filter((e) => e.subcategory_subcategorynum == subcategory);
    }

    return (
        <div>
            <ProductListContainer>
                {error ? (
                    <h1>새로고침 하십시오.</h1>
                ) : (
                    subcategory == '' || subcategory == isNaN(subcategory) || subSkin == '' ? (
                        (init && data?.map((v, i) => {
                            return (
                                <NavLink key={i} to={`/goods/skincare/${v.prodnum}`}>
                                    <li key={i}>
                                        <img src={v.thumbnail} alt='' />
                                        <p className='title'>{v.prodname}</p>
                                        <div className='line'></div>
                                        <p className='price'>{v.prodprice.toLocaleString()}</p>
                                    </li>
                                </NavLink>
                            )
                        }))
                    ) : (
                        (init && subSkin?.map((v, i) => {
                            return (
                                <NavLink key={i} to={`/goods/skincare/${v.prodnum}`} target='_blank'>
                                    <li key={i}>
                                        <img src={v.thumbnail} alt='' />
                                        <p className='title'>{v.prodname}</p>
                                        <div className='line'></div>
                                        <p className='price'>{v.prodprice.toLocaleString()}</p>
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

export default SkinCare;
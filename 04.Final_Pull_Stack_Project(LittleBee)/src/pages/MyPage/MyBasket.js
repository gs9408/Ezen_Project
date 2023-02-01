import React, { memo, useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import BaskContainer from '../../assets/css/mypage/mybasket';
import Table from '../../assets/css/mypage/Table';

// 리덕스 참조
import { useSelector, useDispatch } from "react-redux";
import { getList, editItem, deleteItem, deleteAll } from "../../slices/BasketSlice";

const MyBasket = memo(() => {

    // 데이터 갱신 상태를 확인하기 위한 상태값
    const [init, setInit] = useState(false);

    // 화면 갱신을 위한 더미 상태값
    const [reload, setReload] = useState(0);

    // 배송비 여부
    const [deliver, setDeliver] = useState(0);

    // 상품금액x개수
    const [final, setFinal] = useState(0);

    // 총 개수
    const [qtyAll, setQty] = useState(0);

    /** 리덕스 관련 코드 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.BasketSlice);
    const optionArr = data?.option;

    let Deli = '';
    let qtym = '';
    
    // data가 배열 형식이라면
    if (Array.isArray(data)) {
        Deli = data?.reduce((acc, cur) => acc + cur.prodqty*cur.prodprice, 0);
        qtym = data?.reduce((acc, cur) => acc + cur.prodqty, 0);
    }

    useEffect(() => {
        dispatch(getList()).then(() => {
            setInit(true);
        });

        Deli >= 50000 ? setDeliver(0) : setDeliver(3000);
        setFinal(Deli);
        setQty(qtym);
    }, [dispatch, Deli, qtym, reload]);

    /** 체크박스 클릭 시 총 수량, 총 금액 변화 이벤트 */
    const onChange = useCallback((e) => {
        const current = e.currentTarget;
        const box = current.checked;
        const input = current.parentElement.firstElementChild;
        const qty = parseInt(input.dataset.prodqty);
        const price = parseInt(input.dataset.final);
    
        if (box == false) {
            setFinal(final-price);
            setQty(qtyAll-qty);
        } else if (box == true) {
            setFinal(final+price);
            setQty(qtyAll+qty);
        }
    },[final, qtyAll]);

    /** 옵션변경 버튼 클릭이벤트 */
    const onClick = useCallback((e) => {
        e.preventDefault();
        const current = e.currentTarget;
        current.classList.toggle('active');

        const target = current.parentElement.querySelector('.optionChange');

        if (current.classList.contains("active")) {
            target.style.display = 'block';
        } else {
            target.style.display = 'none';
        }
    }, []);

    /** 상품별 옵션 변경 이벤트 */
    const changeOpt = useCallback((e) => {
        // e.preventDefault();
        const current = e.currentTarget;
        const num = current.dataset.i;
        const hidden = document.querySelector(`#hidden${num}`);

        const optnum = current.opt.value;
        const optnameI = current.opt.selectedIndex;
        const optname = current.opt[optnameI].innerText;
        const basketno = hidden.dataset.basketno;
        const prodqty = hidden.dataset.prodqty;

        console.log(`장바구니번호 ${basketno} 상품개수 ${prodqty} 옵션번호 ${optnum} 옵션이름 ${optname}`);
        
        // 유효성검사 (0번째 인덱스를 선택할 수 없도록)
        if (current.opt.value === '--선택--') {
            window.alert('옵션을 선택해주세요');
            return;
        }

        dispatch(editItem({
            basketno: basketno,
            prodqty: prodqty,
            optname: optname,
            optnum: optnum,
        })
        ).then(({ payload, error }) => {
            if(error) {
                window.alert(payload.data.rsmsg);
                return;
            }
        })
    }, [dispatch]);

    /** 상품별 수량 증감 이벤트 */
    const changeQty = useCallback((e) => {
        const num = e.currentTarget.dataset.num;
        const input = document.querySelector(`.p_num${num}`);
        let defaultQty = parseInt(input.getAttribute('value'));
        const condition = e.currentTarget.dataset.value;
        // plus면 +1 minus면 -1
        const newQty = condition === 'plus' ? defaultQty + 1 : condition === 'minus' ? defaultQty - 1 : defaultQty;

        // 유효성검사 (1밑으로 떨어지지 않음)
        if (parseInt(newQty) < 1 || parseInt(newQty) > 20) { return false; }

        /** data전송 */
        const hidden = document.querySelector(`#hidden${num}`);
        const basketno = hidden.dataset.basketno;
        const optnum = hidden.dataset.optnum;
        const optname = hidden.dataset.optname;

        dispatch(editItem({
            basketno: basketno,
            prodqty: newQty,
            optname: optname,
            optnum: optnum
        })).then(({ payload, error }) => {
            if (error) {
                window.alert(payload.data.rsmsg);
                return;
            }
            input.setAttribute('value', payload.qty.prodqty);
        })
        input.value = newQty;

        dispatch(getList());

    }, [dispatch]);

    /** 선택상품 삭제 이벤트 */
    const deleteNo = useCallback((e) => {
        if(window.confirm('선택한 상품을 삭제하시겠습니까?')) {
            document.querySelectorAll('.checked').forEach((v, i) => {
                const input = v.parentElement.firstElementChild;
                    if(v.checked == true) {

                        dispatch(deleteItem({
                            basketno: input.dataset.basketno
                        })).then(({ payload, error }) => {
                            if(error) {
                                window.alert(payload.data.rsmsg);
                                return;
                            }
                            setReload(reload+1);
                        });
                    }})}
    },[dispatch, reload]);

    /** 전체상품 삭제 이벤트 */
    const deleteAllClick = useCallback((e) => {
        if(window.confirm('장바구니를 비우시겠습니까?')) {
            // 특정 회원의 장바구니 내역을 모두 지움
            dispatch(deleteAll({
                usernum: e.currentTarget.dataset.userno
            })).then(({ payload, error }) => {
                if(error) {
                    window.alert(payload.data.rsmsg);
                    return;
                }
                setReload(reload+1);
                window.alert('삭제되었습니다.');
            });
        }
    }, [dispatch, reload]);

    /** 구매버튼 클릭이벤트 */
    const submitCookie = useCallback((e) => {
        const arr = [];
        document.querySelectorAll('.checked').forEach((v, i) => {
            const input = v.parentElement.firstElementChild;
            if(v.checked == true) {
                arr.push(input.dataset.basketno);
            }
        })

        const Arr = arr.join(',');
        let cookie_str = encodeURIComponent('cookie')+ '=' + encodeURIComponent(Arr) + ';';
        cookie_str += 'path=/;';

        document.cookie = cookie_str;
        
    }, []);
    
    return (
        <BaskContainer>
            <h2>장바구니</h2>
            {error ? (
                <h1>데이터가 없습니다.</h1>
            ) : (
                (init && data) && (
                    <>
                        <Table>
                            <thead>
                                <tr>
                                    <th />
                                    <th colSpan='2' className='prodname'>상품명</th>
                                    <th className='prodopt'>옵션</th>
                                    <th className='prodqty'>수량</th>
                                    <th>상품금액</th>
                                    <th className='check'>합계금액</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((v, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>
                                                <input type='hidden' data-basketno={v.basketno} data-optname={v.optname} data-prodqty={v.prodqty} data-prodprice={v.prodprice} data-optnum={v.productoption_optnum} data-final={v.prodprice*v.prodqty} id={`hidden${i}`}
                                                data-usernum={v.member_usernum}/>
                                                <input type='checkbox' name='select' className='checked' defaultChecked={true}
                                                onChange={onChange}/>
                                            </td>
                                            <td className='img'><img src={v.thumbnail} alt='' /></td>
                                            <td className='name'><NavLink to=''>{v.prodname}</NavLink></td>
                                            <td className='option' id={`optCh${i}`}>
                                                {v.optname}
                                                <button type='button' onClick={onClick} value={v.basketno}>옵션변경</button>
                                                <div className='optionChange'>
                                                    <div className='opchanBox'>옵션 선택</div>
                                                    <form onSubmit={changeOpt} data-i={i}>
                                                        <p>{v.prodname}</p>
                                                        <div className='select'>
                                                            <span>OPTION</span>
                                                            <select key={i} name='opt'>
                                                                <option>--선택--</option>
                                                                {(optionArr?.filter(e => e.product_prodnum == v.prodnum)).map((v, i) => {
                                                                    return (
                                                                        <option key={i} value={v.optnum} value2={v.optname}>{v.optname}</option>
                                                                    )
                                                                })}
                                                            </select>
                                                        </div>
                                                        <button type='submit'>저장</button>
                                                    </form>
                                                </div>
                                            </td>
                                            <td className='num'>
                                                <form>
                                                    <button type='button' data-value='plus' data-num={i} onClick={changeQty}>+</button>
                                                    <input type='text' className={`p_num${i}`} data-set='p_num' defaultValue={v.prodqty} />
                                                    <button type='button' data-value='minus' data-num={i} onClick={changeQty}>-</button>
                                                </form>
                                            </td>
                                            <td>{v.prodprice.toLocaleString()} 원</td>
                                            <td className='check' id={`price${i}`} data-price={v.prodprice}>{(v.prodprice * v.prodqty).toLocaleString()} 원</td>
                                        </tr>
                                    )
                                }
                                )}
                            </tbody>
                        </Table>

                        <div className='delete'>
                            <button onClick={deleteNo}>선택삭제</button>
                            <button onClick={deleteAllClick} data-userno={data[0].member_usernum}>전체삭제</button>
                        </div>

                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>총 개수</th>
                                    <th>총 금액</th>
                                    <th />
                                    <th>배송비</th>
                                    <th />
                                    <th>총 결제금액</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td id='AllQty'>{qtyAll} 개</td>
                                    <td id='AllPrice'>{final.toLocaleString()} 원</td>
                                    <td><i className="fa-solid fa-plus" /></td>
                                    <td>{final >= 50000 ? 0 : 3000} 원</td>
                                    <td><i className="fa-solid fa-plus" /></td>
                                    <td><span className='All'>{(final+deliver).toLocaleString()} 원</span></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='orderPayment'>
                            <NavLink to={`/payment?select=cookie&user=${data[0].member_usernum}`} onClick={submitCookie} >선택상품 주문</NavLink>
                            <NavLink to={`/payment?select=all&user=${data[0].member_usernum}`}>전체상품 주문</NavLink>
                        </div>
                    </>
                )
            )}
        </BaskContainer>
    );
});

export default MyBasket;
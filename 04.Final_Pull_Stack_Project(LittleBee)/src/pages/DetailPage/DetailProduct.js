import React, { memo, useState, useEffect, useCallback } from 'react';
import ImageSlider from 'react-simple-image-slider';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// 리덕스 참조
import { useSelector, useDispatch } from "react-redux";
import { getItem } from "../../slices/ProductSlice";
import { postItem } from "../../slices/BasketSlice";

import DetailProductContainer from '../../assets/css/Product/DetailProductContainer';
import Collapse from './Collapse';
import { useParams } from 'react-router-dom';

/** 쿠키 저장 함수 */
function setCookie(setName, params) {
    let str = encodeURIComponent(setName)+ '=' + encodeURIComponent(params) + ';';
    str += 'path=/;';

    document.cookie = str;
}

const content = [{
    title: '상품 리뷰',
    content: '',
}, {
    title: '상품 문의',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.'
}];

const DetailProduct = memo(() => {
    // 데이터 갱신을 위한 상태값
    const [init, setInit] = useState(false);

    // path파라미터 추출
    const { '*' : prodnum, category } = useParams();
    
    /** 리덕스 관련 코드 */ 
    const dispatch = useDispatch();
    const { data, opt, error} = useSelector((state) => state.ProductSlice);

    useEffect(() => {
        dispatch(getItem({id : prodnum})).then(()=>{
            setInit(true);
        });
    }, [dispatch, prodnum]);

    const DetailImages = [
        {url: data?.thumbnail, option:'option1'}
    ];

    const [myNum, setMyNum] = useState(0);

    /** 드롭다운 선택 시 HTML 추가 */
    const Dropdown = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        const choosenum = current[current.selectedIndex].value;
        const div = document.getElementById(choosenum);
        const A = div.classList.contains('active');

        if (A === true) {
            div.classList.remove('active');
        }

        document.querySelectorAll('.X').forEach((v, i) => {
            v.addEventListener('click', (e)=> {
                const current = e.currentTarget.closest('li');
                current.classList.add('active');
                const A = current.querySelector('div').querySelector('input');
                A.value = 0;
            })
        })
    }, []);

    const onClickQty = useCallback((e) => {
        const current = e.currentTarget;
        const target = current.parentElement.querySelector('input');
        const set = current.dataset.set;
        if (set === 'minus') {
            let A = parseInt(target.value);
            if (A === 0) {
                // 선택 수량이 0개면 alert으로 표시
                window.alert("sdfsdf");
                return;
            }
            target.value = A-1;
            console.log(target.value);
        } else {
            let A = parseInt(target.value);
            target.value = A+1;
        }
    }, []);

    // 장바구니 클릭 시 alert창 띄우기
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();
    const onBasketConfirm = useCallback(async () => {
        const current = document.querySelector('.selectOption');
        const choose = current[current.selectedIndex].value;
        console.log(choose);
        const Optname = opt.filter(e => e.optnum == choose);

        // 선택 수량이 0이 아니고 옵션 선택을 했다면
        if(myNum != 0 && choose != '') {
            const result = await Swal.fire({
                icon: 'question',
                html: '<p style="color: #fff"><a href="#">상품이 장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?</a><b></b></p>',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: true,
                confirmButtonText: '이동',
                cancelButtonText: '취소'
            });
    
            dispatch(postItem({
                category: category,
                prodnum: data.prodnum,
                prodname: data.prodname,
                thumbnail: data.thumbnail,
                optname: Optname[0].optname,
                prodqty: myNum,
                prodprice: data.prodprice,
                member_usernum: 10001,
                optnum: choose
            })).then(({payload, error}) => {
                if (error) {
                    window.alert(payload.data.rtmsg);
                    return;
                } else {
                    console.log(payload.data);
                }
            })
    
            if (result.isConfirmed) {
                navigate("/mymain/mybasket");
            }
        } else {
            window.alert('옵션 및 구매수량을 선택해주세요.');
            return;
        }
    }, [MySwal]);

    /** 바로결제 버튼 클릭 이벤트 */
    const onNowPurchase = useCallback((e) => {
        e.preventDefault();
        const current = e.currentTarget;

        const prodnum = current.input.dataset.prodnum;
        const optnum = current.option.value;
        const prodqty = myNum;
        const selected = current.option.selectedIndex;
        const optname = current.option[selected].innerText;
        console.log(prodqty);
        console.log(optnum);

        if (myNum !== 0 && optnum !== '') {
            setCookie('prodnum' ,prodnum);
            setCookie('optnum', optnum);
            setCookie('prodqty', prodqty);
            setCookie('optname', optname);
    
            // userno값은 로그인 세션으로 받아와야 할듯?
            navigate("/payment?select=item&user=10001");
        } else {
            window.alert('옵션 및 구매수량을 선택해주세요.');
            return;
        }
    }, [navigate, myNum]);

    return (
        <DetailProductContainer>
            {error ? (
                <h1>새로고침 하십시오.</h1>
            ) : (
                (init && data) && (
                    <>
                    <div className='purchaseDetail'>
                        <div className='sliderImgArea'>
                            <ImageSlider 
                                width={441}
                                height={441}
                                images={DetailImages}
                                showBullets={true}
                                showNavs={false}
                                autoPlay={false}
                                autoPlayDelay={1}
                                loop={false}
                                style={
                                    {margin: '10px', cursor: 'pointer', objectFit: 'cover'}
                                }
                            />
                        </div>
                        <form className='purchaseArea' onSubmit={onNowPurchase}>
                            <input type='hidden' name='input' 
                            data-prodnum={data.prodnum}
                            data-prodname={data.prodname}
                            data-prodprice={data.prodprice}
                            data-thumbnail={data.thumbnail}/>
                            <h1 className='productTitle'>{data.prodname}</h1>
                            <div className='titleArea'>
                                <p>판매가</p>
                                <p>배송비</p>
                                <p>적립금</p>
                            </div>
                            <div className='priceArea'>
                                <p>{(data.prodprice).toLocaleString()} 원</p>
                                <p>3,000원 (50,000원 이상 구매시 무료)</p>
                                <p>{data.prodprice * 1 / 100}원 (1%)</p>
                            </div>
                            <div className='selectArea'>
                                <h3>선택</h3>
                                <select className='selectOption' name='option' onChange={Dropdown}>
                                    <option value=''>--- [필수] 옵션을 선택해 주세요 ---</option>
                                    {opt.map((v, i) => {
                                        return (
                                            <option key={i} value={v.optnum}>{v.optname}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='numBtn'>
                                {/* <div>
                                    <button type='button' className='mBtn' onClick={e => setMyNum(myNum-1)}>-</button>
                                    <input className='quantity' name='qty' value={myNum} readOnly />
                                    <button type='button' className='pBtn' onClick={e => setMyNum(myNum+1)}>+</button>
                                </div> */}
                            </div>
                            <hr />
                            <ul className='setInput'>
                                {opt.map((v, i) => {
                                    return (
                                        <li key={i} id={v.optnum} className='selectOpt active'>
                                            <input type='hidden' data-optnum={v.optnum}
                                            data-optname={v.optname}
                                            data-price={v.prodprice}/>
                                            <div>
                                                <p>옵션 : {v.optname}</p>
                                                <div className='wrapOpt'>
                                                    <button type='button' className='mBtn' data-set='minus' onClick={onClickQty}>-</button>
                                                    <input className='quantity' name='qty' value={0} readOnly />
                                                    <button type='button' className='mBtn' data-set='plus' onClick={onClickQty}>+</button>
                                                </div>
                                            </div>
                                            <div className='btnW'>
                                                <button type='button' className='X'>X</button>
                                                <span>{(data.prodprice).toLocaleString()} 원</span>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className='total'>총 상품금액 (수량)
                                <div><span className='totalPrice'>{(data.prodprice*myNum).toLocaleString()}원 </span><span className='totalNum'> ({myNum}개)</span></div>
                            </div>
        
                            <div className='btnArea'>
                                <button type='submit' className='purchaseBtn'>바로구매</button>
                                <div className='basket'>
                                    <button type='button' className='btn' onClick={onBasketConfirm}>장바구니</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='scrollBox1'>
                        <ul className='link1'>
                            <li className='linkBtn'><Link to='descriptionbtn' spy={true} smooth={false} id='descriptionbtn'>상품상세정보</Link></li>
                            <li className='linkBtn'><Link to='delivery' spy={true} smooth={false}>배송/교환/반품</Link></li>
                            <li className='linkBtn'><Link to='exchangeReturn' spy={true} smooth={false}>구매 후기</Link></li>
                            <li className='linkBtn'><Link to='exchangeReturn' spy={true} smooth={false}>상품 문의</Link></li>
                        </ul>
                    </div>
                    <div className='description'>
                        <img src={data.prodinfo} alt='detailImage' />
                    </div>
                    <div className='scrollBox2'>
                        <ul className='link2'>
                            <li className='linkBtn'><Link to='descriptionbtn' spy={true} smooth={false}>상품상세정보</Link></li>
                            <li className='linkBtn'><Link to='delivery' spy={true} smooth={false} id='delivery'>배송/교환/반품</Link></li>
                            <li className='linkBtn'><Link to='exchangeReturn' spy={true} smooth={false}>구매 후기</Link></li>
                            <li className='linkBtn'><Link to='exchangeReturn' spy={true} smooth={false}>상품 문의</Link></li>
                        </ul>
                    </div>
                    <div className='deliveryInfo'>
                        <h2>배송 안내</h2>
                        <p>- 배송비 : 기본배송료는 2,500원 입니다. (배송비 추가 기준은 당사에 사정에 따라 수시로 변동 될 수 있습니다.)</p>
                        <p>- 상품의 평균 배송일은 2~3일입니다.(입금 확인 후)[배송예정일은 주문시점(주문순서)에 따른 유동성이 발생하므로 평균 배송일과는 차이가 발생할 수 있습니다.]</p>
                        <p>- 배송은 당일 8시이전 주문 시에만 당일 출고가 가능하며, 그 이후 주문 건에 대해서는 익일 출고됩니다.(평일기준, 주말 및 공휴일에는 다음 평일 기준으로 출고가 진행됩니다.)</p>
                        <p>※ 당사 및 택배사의 사정 따라 위 기준은 변동 될 수 있습니다.</p>
                    </div>
                    <div id='exchangeReturn'>
                        <h2>교환 및 반품안내</h2>
                        <p>- 교환이나 환불은 상품수령일로부터 7일이내에 하자가 없어야 가능합니다.</p>
                        <p>- 교환은 동일상품의 색상이나 사이즈 교환만 가능하고, 택배비 5,000원이 발생됩니다.</p>
                        <p>- 교환은 해당 상품의 재고가 있어야 가능합니다. 없을시 환불처리만 가능합니다.</p>
                        <p>- 불량으로 인한 교환 및 반품은 무상으로 처리드리며, 전액 환불처리 됩니다.</p>
                        <p>- 상품 택(tag)제거 또는 개봉으로 상품 가치 훼손 시에는 상품수령후 7일 이내라도 교환 및 반품이 불가능합니다.</p>
                        <p>- 저단가 상품, 일부 특가 상품은 고객 변심에 의한 교환, 반품은 고객께서 배송비를 부담하셔야 합니다(제품의 하자,배송오류는 제외)</p>
                        <p>- 일부 상품은 신모델 출시, 부품가격 변동 등 제조사 사정으로 가격이 변동될 수 있습니다.</p>
                        <p>- 신발의 경우, 실외에서 착화하였거나 사용흔적이 있는 경우에는 교환/반품 기간내라도 교환 및 반품이 불가능 합니다.</p>
                        <p>- 수제화 중 개별 주문제작상품(굽높이,발볼,사이즈 변경)의 경우에는 제작완료, 인수 후에는 교환/반품기간내라도 교환 및 반품이 불가능 합니다. </p>
                        <p>- 수입,명품 제품의 경우, 제품 및 본 상품의 박스 훼손, 분실 등으로 인한 상품 가치 훼손 시 교환 및 반품이 불가능 하오니, 양해 바랍니다.</p>
                        <p>- 소비자분쟁해결 기준(공정거래위원회 고시)에 따라 피해를 보상받을 수 있습니다.</p>
                        <p className='last'>- 교환 및 반품은 마이페이지에서 접수시, 영업일 기준 1~3일내 확인후 회수 택배를 신청해 드립니다.</p>

                        <h2>환불안내</h2>
                        <p>- 환불은 상품수령일로부터 7일이내에 하자가 없어야 가능합니다.</p>
                        <p>- 반품은 전체반품시 택배비 5,000원, 부분반품(일부반품) 시에는 택배비 2,500원이 발생 됩니다.</p>
                        <p>- 카드의 경우 취소완료후 즉시 취소처리되며, 정확한 결제 취소확인은 3~5일후에 해당카드사로 확인 부탁드립니다.</p>
                        <p>- 입금건의 경우 취소완료 후 영업일기준 일주일정도 소요됩니다.</p>
                        <p className='last'>- [상품 준비 중]에는 이미 배송준비가 완료되어 물류 이동 상태로 변경 및 취소가 불가합니다.</p>

                        <h2>고객센터</h2>
                        <p>- 교환/반품/환불 관련 고객센터 : 1688-3992</p>
                        <p>- A/S 관련 고객센터 : 02-527-1430</p>
                    </div>
                    <div>
                        <Collapse id='collapse-title' content={content} />
                    </div>
                </>
                )
            )}
        </DetailProductContainer>
    );
});

export default DetailProduct;
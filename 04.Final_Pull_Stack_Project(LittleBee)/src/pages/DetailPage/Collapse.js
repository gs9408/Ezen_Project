import React, { memo, useCallback } from 'react';
import CollapseContainer from '../../assets/css/Product/CollapseContainer';

const reviewData = [
    {
        id: 'id1' ,title: '아주 좋아요', content: '검정은 예전에 비슷한거 있어서 실컷 입다가 옷이 많이 상해서 처분하고,무스탕 새거 하나 사고싶어서 브라운 샀어요 잘 맞고 이쁜데아이보리랑 엄청 망설였어요 실용성 면에서 암데나 다 어울리는게 브라운이고..예쁘게 입을 거는 아이보리가 나은듯,,옷 관리 잘 못해서 금방 더러워 질까봐 브라운 했습니다.. 아이보리가 아직도 아른아른,,옷은 진짜 따듯해요 근데 안에 털 장난아님,,ㅠ,,ㅠ 안에 검정티랑 흰티 입었는데 털뭉탱이가ㅏ 티셔츠에 붙음,,ㅎ..ㅠㅠ뒤집에서 밖에서 탈탈 털었는데도 털이 조금씩 빠집니다 그리고 실밥 정리 필수',
        // img: [
        //     {img1: scProduct1}, {img1: scProduct2}, {img1: scProduct3}
        // ]
    }, {
        id: 'id2', title: '별로에요', content: '으음 .. 색이 디테일컷하고는 많이 다르네요? 실제로는 회색끼도는 연한 브라운이에요 색에서 실망감이 큼 그리고 앞 지퍼쪽이 계속 울어요너무 기대했나봐요 .. 생각보다 별로여서 실망감이 크네요',
        // img: [
        //     {img1: scProduct1}, {img1: scProduct3}
        // ]
    }, {
        id: 'id3', title: '아주 좋아요', content: '일단 핏이 오버핏이 아니라서 좋아요 대신에 먼지가 잘붙는 재질이에요 그리고 실밥이 좀 많아요',
        // img: [
        //     {img1: scProduct1}, {img1: scProduct2}, {img1: scProduct3}
        // ]
    }, {
        id: 'id4', title: '좋아요', content: '너무따뜻해서놀람ㅋㅋㅋㅋ옷너무너무이뻐요ㅋㅋ겨울에실컷입을듯ㅋ',
        // img: [
        //     {img1: scProduct5}, {img1: scProduct2}, {img1: scProduct4}, {img1: scProduct3}, {img1: scProduct1}
        // ]
    }, {
        id: 'id5', title: '보통이에요', content: '검은 옷 위에 입었다가 털이 다 묻고 날려서 놀랐네요 실밥도 여기저기 나와있는데 털 정리 하면 될거 같아요. 이 가격에는 가성비 좋은 이쁜 옷이에요',
        // img: [
        //     {img1: scProduct3}, {img1: scProduct1}
        // ]
    }, {
        id: 'id6', title: '아주 좋아요', content: '아 솔직히 너무 예뻐요…고급져보이고 털도 완젼 보들보들~ 근데 털이 쫌 날리긴해요ㅠ 어쩔순 없죠! 근데 제가 무스탕 사려고 여러곳을 뒤졌는데 이게 젤 핏이 예뻐요!!!!! 어깨도 부해보이지 않고 핏한 느낌? 인데 끼지 않아요🥰🥰 오버핏 아닌 무스탕이라 너무 좋아요~',
        // img: [
        //     {img1: scProduct1}
        // ]
    }, {
        id: 'id7', title: '좋아요', content: '핏도 이쁘고 무엇보다 무스탕 털이 잘 빠지지 않는 것 같아서 좋네요 안감에도 털이 있어서 초겨울까지는 이쁘게 입고 다닐 것 같습니다ㅎ',
        // img: [
        //     {img1: scProduct2}, {img1: scProduct4}, {img1: scProduct3}, {img1: scProduct1}
        // ]
    }, {
        id: 'id8', title: '좋아요', content: '짱조아요 내가 생각한핏!',
        // img: [
        //     {img1: scProduct5}, {img1: scProduct3}, {img1: scProduct1}
        // ]
    }, {
        id: 'id9', title: '보통이에요', content: '가죽재질 아닌 스웨이드라서 부담도 덜되고 사이즈도 레귤러핏이라 부한것도 없음 안쪽 다 퍼라서 따듯해요',
        // img: [
        //     {img1: scProduct5}
        // ]
    },
];

const inquiry = [
    {
        id: 5, category: '로션', content: '상품 문의', author: '홍길동', date: '2022-12-07', data: '가죽재질 아닌 스웨이드라서 부담도 덜되고 사이즈도 레귤러핏이라 부한것도 없음 안쪽 다 퍼라서 따듯해요'
    }, {
        id: 4, category: '의류', content: '사이즈 문의', author: '홍길동2', date: '2022-12-05', data:'아 솔직히 너무 예뻐요…고급져보이고 털도 완젼 보들보들~ 근데 털이 쫌 날리긴해요ㅠ 어쩔순 없죠! 근데 제가 무스탕 사려고 여러곳을 뒤졌는데 이게 젤 핏이 예뻐요!!!!! 어깨도 부해보이지 않고 핏한 느낌? 인데 끼지 않아요🥰🥰 오버핏 아닌 무스탕이라 너무 좋아요~'
    }, {
        id: 3, category: '의류', content: '배송 문의', author: '홍길동3', date: '2022-12-04', data:'검정은 예전에 비슷한거 있어서 실컷 입다가 옷이 많이 상해서 처분하고,무스탕 새거 하나 사고싶어서 브라운 샀어요 잘 맞고 이쁜데아이보리랑 엄청 망설였어요 실용성 면에서 암데나 다 어울리는게 브라운이고..예쁘게 입을 거는 아이보리가 나은듯,,옷 관리 잘 못해서 금방 더러워 질까봐 브라운 했습니다.. 아이보리가 아직도 아른아른,,옷은 진짜 따듯해요 근데 안에 털 장난아님,,ㅠ,,ㅠ 안에 검정티랑 흰티 입었는데 털뭉탱이가ㅏ 티셔츠에 붙음,,ㅎ..ㅠㅠ뒤집에서 밖에서 탈탈 털었는데도 털이 조금씩 빠집니다 그리고 실밥 정리 필수'
    }, {
        id: 2, category: '의류', content: '상품 문의', author: '홍길동4', date: '2022-12-02', data:'짱조아요 내가 생각한핏!'
    }, {
        id: 1, category: '의류', content: '배송 문의', author: '홍길동5', date: '2022-11-29', data:'검은 옷 위에 입었다가 털이 다 묻고 날려서 놀랐네요 실밥도 여기저기 나와있는데 털 정리 하면 될거 같아요. 이 가격에는 가성비 좋은 이쁜 옷이에요'
    }
]

const Collapse = memo(() => {

    /** 구매후기, 상품문의 collapse 버튼 클릭 이벤트 */
    const onCollapseTitleClick = useCallback((e) => {
        const current = e.currentTarget;
        current.classList.toggle('active');

        const content = current.parentElement.querySelector('.collapse-content');
        console.log(content);
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }
        else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    }, []);

    /** 구매후기에서 '후기 작성' 버튼 클릭 이벤트 */
    const onWrightReviewClick = useCallback((e) => {
        e.preventDefault();
        
        const Write = document.querySelector('.reviewWrite');
        
        // window.alert(Write.style.display);
        if (Write.style.display !== 'block' || Write.style.display == null) {
            Write.style.display = 'block';
        }
        else {
            Write.style.display = 'none';
        }
    }, []);

    /** 리뷰 작성 창의 취소 버튼 이벤트 */
    const onCancel = useCallback((e) => {
        e.preventDefault();

        const Write = document.querySelector('.reviewWrite');
        if (Write.style.display == 'block') {
            Write.style.display = 'none';
        }
    }, []);

    /** 상품 문의에서 글자 간략히보기/더보기 관련 이벤트 */
    const onInquiryContentClick = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget;
        current.classList.toggle('active');
        const moreContent = document.querySelector('.moreContent');
        // current.style.display = '-webkit-box';
        current.classList.contains('active') == true ? current.style.display = 'block' : current.style.display = '-webkit-box';
    }, []);

    const onFileUpload = useCallback((e) => {
        e.preventDefault();

        const current = e.currentTarget.value;
        console.log(current);
    }, []);

    return (
        <CollapseContainer>
            <div className='detailPageCollapse'>
                <h1 className='collapse-title1' onClick={onCollapseTitleClick}>구매 후기</h1>
                <div className='collapse-content'>
                    <button type='button' className='reviewBtn' onClick={onWrightReviewClick}>+ 후기 작성</button>
                    <div className='reviewWrite'>
                        <div className='reviewProductBox'>
                            <img src='' alt='ProductImage' className='productImgReview' />
                            <h3 className='productImgTitle'>[Ecomu]에코뮤 샴푸앤바스 320ml</h3>
                        </div>
                        <hr />
                        <p className='reviewAuthor'>작성자 : {reviewData[0].id}</p>
                        <div className='addImage'>+사진추가</div>
                        <div className='addImage'>+사진추가</div>
                        <div className='addImage'>+사진추가</div>
                        <input type='file' accept="image/jpeg, .jpg, .png" className='fileUpload' multiple />

                        <form className='reviewForm'>
                            <input type='text' placeholder='제목을 입력하세요.' className='reviewWriteTitle' />
                            <textarea placeholder='내용을 입력하세요' className='reviewWriteContent'></textarea>
                            <input type='submit' value='저장하기' className='reviewSRBtn' />
                            <input type='button' value='취소' className='reviewSRBtn' onClick={onCancel} />
                        </form>
                    </div>
                    {reviewData && reviewData.map((v, i) => {
                        return (
                            <div className='reviewArea' key={i}>
                                <h2 className='userId'>{v.id} 님</h2>
                                {v.img && v.img.map((v1,i1) => {
                                    return (
                                        <img key={i1} src={v1.img1} className='reviewImg' alt='' />
                                    )
                                })}
                                <h3 className='reviewTitle'>{v.title}</h3>
                                <p className='reviewContent'>{v.content}</p>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='detailPageCollapse'>
                <h1 className='collapse-title2' onClick={onCollapseTitleClick}>상품 문의</h1>
                <div className='collapse-content'>
                    <table className='inquiryTable'>
                        <thead>
                            <tr className='tableHead'>
                                <th>번호</th>
                                <th>카테고리</th>
                                <th>제목</th>
                                <th className='tableContent'>내용</th>
                                <th>작성자</th>
                                <th>작성일</th>
                            </tr>
                        </thead>
                        {inquiry && inquiry.map((v, i) => {
                            return (
                                <tbody key={v.id}>
                                    <tr className='tableBody'>
                                        <td>{v.id}</td>
                                        <td>{v.category}</td>
                                        <td>{v.content}</td>
                                        <td>
                                            <p className='tableBodyContent' onClick={onInquiryContentClick}>
                                                {v.data}
                                            </p>
                                        </td>
                                        <td>{v.author}</td>
                                        <td>{v.date}</td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>
                </div>
            </div>
        </CollapseContainer>
    );
});

export default Collapse;
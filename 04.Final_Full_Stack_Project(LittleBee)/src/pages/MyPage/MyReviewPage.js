import React, { memo, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReviewStyle from '../../assets/css/mypage/ReviewStyle';
import { useCallback } from 'react';
import FsLightbox from 'fslightbox-react';

// import img1 from '../../assets/img/Category_FoodProducts/foodproduct1.jpeg';
// import img2 from '../../assets/img/Category_FoodProducts/foodproduct2.jpeg';
// import img3 from '../../assets/img/Category_FoodProducts/foodproduct3.jpeg';
// import img4 from '../../assets/img/Category_FoodProducts/foodproduct4.jpeg';
// import img5 from '../../assets/img/Category_FoodProducts/foodproduct5.jpeg';

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
    const location = useLocation();
    const { search } = location;
    const query = new URLSearchParams(search);
    const id = parseInt(query.get('id'));

    const [multiToggler, setMultiToggler] = useState({
        open: false,
        index: 1
    });

    const item = useMemo(() => {
        if (reviewlist) {
            return reviewlist.find((v, i) => v.id == id);
        }
    }, [id]);

    const onReviewEdit = useCallback((e) => {
        alert('수정하기 버튼 누름');
    }, []);

    return (
        <ReviewStyle>
            <div className='page'>
                <h2>{item.title}</h2>
                <hr />
                <p className='date'>{item.date}</p>
                <hr />
                <div className='review_img_box'>
                    <button onClick={e => setMultiToggler({open: !multiToggler.open, index: 1})} className='review_img'>
                        <img src='' width='150' alt='img1' />
                    </button>
                    <button onClick={e => setMultiToggler({open: !multiToggler.open, index: 2})} className='review_img'>
                        <img src='' width='150' alt='img2' />
                    </button>
                    <button onClick={e => setMultiToggler({open: !multiToggler.open, index: 3})} className='review_img'>
                        <img src='' width='150' alt='img3' />
                    </button>
                    <button onClick={e => setMultiToggler({open: !multiToggler.open, index: 4})} className='review_img'>
                        <img src='' width='150' alt='img4' />
                    </button>
                    <button onClick={e => setMultiToggler({open: !multiToggler.open, index: 5})} className='review_img'>
                        <img src='' width='150' alt='img5' />
                    </button>
                    <FsLightbox sources='' toggler={multiToggler.open} slide={multiToggler.index} />
                </div>
                <p className='text'>{item.text}</p>
            </div>
            <input type='button' value='수정하기' className='review_edit' onClick={onReviewEdit}/>
        </ReviewStyle>
    );
});

export default MyReview;
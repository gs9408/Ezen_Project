import React, { memo, useEffect, useCallback } from 'react';
import ImageSlider from 'react-simple-image-slider';
import { NavLink } from 'react-router-dom';
import { MainContainer, EventProduct, NewProduct,  ReviewContainer } from '../assets/css/MainPage';
import { useNavigate } from 'react-router-dom';

import MainSlider1 from '../assets/img/MainPage/MainSlider1.jpg';
import MainSlider2 from '../assets/img/MainPage/MainSlider2.jpg';
import MainSlider3 from '../assets/img/MainPage/MainSlider3.jpg';
import MainSub1 from '../assets/img/MainPage/Mainsub1.webp';
import MainSub2 from '../assets/img/MainPage/Mainsub2.webp';
import MainSub3 from '../assets/img/MainPage/Mainsub3.webp';
import newProduct1 from '../assets/img/MainPage/newP1.webp';
import newProduct2 from '../assets/img/MainPage/newP2.webp';
import newProduct3 from '../assets/img/MainPage/newP3.webp';
import Review1 from '../assets/img/MainPage/Review1.jpeg';
import Review2 from '../assets/img/MainPage/Review2.jpeg';
import Review3 from '../assets/img/MainPage/Review3.jpeg';
import Review4 from '../assets/img/MainPage/Review4.jpeg';

const Main = memo(() => {
    const navigate = useNavigate();
    
    const onClickEventProduct = useCallback((e) => {
        navigate(`/`)
    })
    const images = [
        {url: MainSlider1},
        {url: MainSlider2},
        {url: MainSlider3}
    ]
    const subImg = [
        {img: MainSub1},
        {img: MainSub2},
        {img: MainSub3}
    ]
    const newProductImg = [
        {img: newProduct1, title: 'Little Fox Plate', price: '$17.00'},
        {img: newProduct2, title: 'Adventures Teepee Tent', price: '$250.00'},
        {img: newProduct3, title: 'Sunny Day Cushion', price: '$65.00'}
    ]
    const ReviewImg = [
        {img: Review1},
        {img: Review2},
        {img: Review3},
        {img: Review4}
    ]
    return (
        <MainContainer>
            <NavLink>
                <ImageSlider 
                    width="980px"
                    height="591px"
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    autoPlayDelay={2.0}
                    loop={true}
                    style={{
                        margin: 'auto',
                        objectFit: 'cover',
                    }}
                />
            </NavLink>
            <h2>이벤트 & 할인상품</h2>
            <EventProduct onClick={onClickEventProduct}>
                {subImg.map((v, i) => {
                    return (
                        <li key={i}>
                            <a href={`#${i}`}>
                                <img src={v.img} />
                            </a>
                        </li>
                    )
                })}
            </EventProduct>
            <h2>신상품</h2>
            <NewProduct>
                {newProductImg.map((v, i) => {
                    return (
                        <li key={i}>
                            <a href={`#${i}`}>
                                <img src={v.img} title={v.title} />
                                <p className='title'>{v.title}</p>
                                <div className='line'></div>
                                <p className='price'>{v.price}</p>
                            </a>
                        </li>
                    )
                })}
            </NewProduct>
                <h2>Best Review</h2>
            <ReviewContainer>
                {ReviewImg.map((v, i) => {
                    return (
                        <li key={i}>
                            <a href={`#${i}`}>
                                <img src={v.img} />
                            </a>
                        </li>
                    )
                })}
            </ReviewContainer>
        </MainContainer>
    );
});

export default Main;
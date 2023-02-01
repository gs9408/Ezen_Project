/**
 * @filename: Footer.js
 * @description: 화면 하단 공통 컴포넌트
 * @author: Gwansoo Kim
 */

import React, {memo} from 'react';
import styled from 'styled-components';
import bee from '../assets/img/MainPage/bee.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const FooterContainer = styled.footer`
    /* border: 1px solid #000; */
    width: 980px;
    /* background-color: #eee; */
    height: 150px;
    padding: 10px 0;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    .footerLogo {
        display: flex;
        width: 240px;
        height: 100px;
        margin-right: 30px;
        background-color: #c9e6f6;
        align-items: center;
        border-radius: 30px;

        & img {
            width: 80px;
            height: 80px;
        }
        & h2 {
            font-size: 25px;
            text-align: center;
            font-family: "Black Han Sans", sans-serif;
            display:grid;
            align-items:center; /* 방향이 row 기준: 세로 중앙 정렬*/
            color: #fff;
        }
    }

    .footerMenu {
        width: 720px;

        .link {
            display: flex;
            justify-content: start;
            height: 80px;
            line-height: 40px;
            border-bottom: 3px solid #ccc;
            padding: 25px 0 18px;
            box-sizing: border-box;

            h4{
                font-size: 15px;
                color: #999;
                margin: 0 20px;
            }
            
            a {
                font-size: 18px;
                color: #777;
                margin-right: 25px;
                &:hover {
                    color: #a1bece;
                    transition: 0.3s;
                }
                &:nth-child(4) {
                    margin-right: 40px;
                }
            }
            p {
                font-size: 15px;
                margin-right: 10px;
                color: #999;
            }
            /* .nav {
                font-size: 15px;
                font-weight: bold;
                color: #777; */
            .list {
                padding: 5px 15px;
                border: 1px solid #ddd;
                border-radius: 5px;
                
            }
        }

        .footerinfo {
            padding: 10px 10px;
            color: #aaa;
            p {
                line-height: 2;
                font-size: 13px;
                margin-right: 10px;
                display: inline-block;
            }
        }
    }
    /* .termsOfService {
        border: 1px solid #000;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 700px;
        padding: 30px;
        box-sizing: border-box;
        background-color: #fff;

        h2 {
            font-size: 30px;
            text-align: center;
            padding: 0 10px 20px;
        }

        textarea {
            margin: auto;
            width: 630px;
            height: 400px;
            resize: none;
        }
    } */
`;

const Footer = memo(() => {
    const FooterList = [
        {list: '공지사항'},
        {list: 'Q&A'},
        {list: '이용약관'},
        {list: '개인정보 취급방침'},
        {list: '신생아 침구/섬유류'},
        {list: '수유/이유식용품'},
        {list: '스킨케어'},
    ];

    const navigate = useNavigate();
    const onSelectChange = useCallback((e) => {
        e.preventDefault();

        const choose = e.currentTarget.selectedIndex;
        const value = e.currentTarget[choose].value;
        // console.log(value);

        switch (value) {
            case '0':
                navigate('/noticelist');
                break;
            case '1':
                navigate('/qnalist');
                break;
            case '2':
                navigate('/termofservice');
                break;
            case '3':
                navigate('/privacypolicy');
                break;
            case '4':
                navigate('/products/beddingcloth');
                break;
            case '5':
                navigate('/products/foodproducts');
                break;
            case '6':
                navigate('/products/skincare');
                break; 
        }
    });

    return (
        <FooterContainer>
            <NavLink to='/'>
                <div className='footerLogo'>
                    <img src={bee} alt=''/>
                    <h2>Little Bee</h2>
                </div>
            </NavLink>
            <div className='footerMenu'>
                    {/* <NavLink to='/products/beddingcloth' className='nav'>신생아 침구/섬유류</NavLink>
                    <NavLink to='/products/foodproducts' className='nav'>수유/이유식용품</NavLink>
                    <NavLink to='/products/skincare' className='nav'>스킨케어</NavLink>
                    <NavLink to='noticelist' className='nav'>공지사항</NavLink>
                    <NavLink to='qnalist' className='nav'>Q&A</NavLink> */}
                <div className='link'>
                    <h4>Little Bee의 다양한 소식을 만나보세요!</h4>
                    <a href='http://www.instagram.com' target='_blank'><i className="fa-brands fa-instagram"></i></a>
                    <a href='http://www.facebook.com' target='_blank'><i className="fa-brands fa-facebook"></i></a>
                    <a href='http://www.youtube.com' target='_blank'><i className="fa-brands fa-youtube"></i></a>
                    <p>Customer Center</p>
                    <select className='list' onChange={onSelectChange}>
                        <option value=''>----선택하세요----</option>
                        {FooterList && FooterList.map((v, i) => {
                            return (
                                <option value={i} key={i}>{v.list}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='footerinfo'>
                    <p>주&#41;아가방앤컴퍼니</p>
                    <p>대표이사 :신상국</p>
                    <p>서울특별시 강남구 테헤란로 207 (아가방빌딩) 11층</p>
                    <p>사업자등록번호 :220-81-01830</p>
                    <p>통신판매업신고번호 :제2013-서울강남-02148호</p>
                    <p>의료기기판매업신고 :제4758호</p>
                    <p>개인정보관리자 :유영민</p>
                    <p>팩스번호 :02-527-1463</p>
                    <p>copyright &#40;c&#41; agabangmall.com all rights reserved.</p>
                </div>
            </div>
            {/* <div className='termsOfService'>
                <h2>이용 약관</h2>
                
                <textarea className='infoCont' readonly>
                    
                </textarea>
            </div> */}
        </FooterContainer>
    );
});

export default Footer;
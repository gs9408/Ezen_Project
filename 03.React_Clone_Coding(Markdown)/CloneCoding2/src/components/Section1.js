import React, {memo} from 'react';
import styled from 'styled-components';
import Sandwich from '../assets/img/sandwich.jpeg';
import Steak from '../assets/img/steak.jpeg';
import Cherries from '../assets/img/cherries.jpeg';
import Wine from '../assets/img/wine.jpeg';
import Popsicle from '../assets/img/popsicle.jpeg';
import Salmon from '../assets/img/salmon.jpeg';
import Croissant from '../assets/img/croissant.jpeg';
import mq from '../MediaQuery';

const Section1Container = styled.div`
                
    .section1 {
        max-width: 1200px;
        margin: auto;
        .section1Item,
        .section2Item {
            margin-top: 50px;
            padding: 15px;
            & ul {
                display: flex;
                
                ${mq.maxWidth('lg')`
                    flex-wrap: wrap;
                `}
                ${mq.maxWidth('sm')`
                    flex-wrap: wrap;
                `}
                & li {
                    width: 25%;
                    list-style: none;
                    /* border: 1px solid #000; */
                    padding: 8px;
                    box-sizing: border-box;
                    ${mq.maxWidth('lg')`
                        width: 50%
                    `}
                    ${mq.maxWidth('sm')`
                        width: 100%
                    `}
                    
                    & img { 
                        width: 100%;
                    }
                    & h3 {
                        font-size: 22px;
                        text-align: center;
                        font-weight: normal;
                        padding: 7px;
                        line-height: 1.6em;
                    }
                    & p {
                        margin-top: 10px;
                        line-height: 1.6em;
                        font-size: 14px;
                        text-align: center;
                        color: rgba(0, 0, 0, 0.793);
                    }
    
                }
            }
    
        }
        .section2Item {
            margin-top: 0;
        }
                

        .btn {
            text-align: center;
            padding: 32px 0;
            .numBtn {
                display: inline-block;
                & a {
                    text-decoration: none;
                    color: #000;
                    font-size: 15px;
                    padding: 12px 16px;
                    width: auto;
                    display: block;
                    float: left;
                    
                    &:hover {
                        background-color: #000;
                        color: #fff;
                        cursor: pointer;
                    }
                }
                & a:nth-child(2) {
                    background-color: #000;
                    color: #fff;
                }
            }
        }
        hr {
            border: solid 1px #eee;
            margin: 20px 0;
        }
    }
`;

const menuList1 = [
    {img: Sandwich, title: 'The Perfect Sandwich, A Real NYC Classic', content: 'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: Steak, title: 'Let Me Tell You About This Steak', content: 'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: Cherries, title: 'Cherries, interrupted', content: 'JLorem ipsum text praesent tincidunt ipsum lipsum. What else?'},
    {img: Wine, title: 'Once Again, Robust Wine and Vegetable Pasta', content: 'Lorem ipsum text praesent tincidunt ipsum lipsum.'}
];

const menuList2 = [
    {img: Popsicle, title: 'All I Need Is a Popsicle', content: 'Lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: Salmon, title: 'Salmon For Your Skin', content: 'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: Sandwich, title: 'The Perfect Sandwich, A Real Classic', content: 'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.'},
    {img: Croissant, title: 'Le French', content: 'Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.'},

];

const Section1 = memo(() => {
    
    return (
        <Section1Container>
            <div className='section1'>
                <div className='section1Item'>
                    <ul>
                        {menuList1.map(({img, title, content}, i) => {
                            return (
                                <li key={i}>
                                    <img src={img} />
                                    <h3>{title}</h3>
                                    <p>{content}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='section2Item'>
                    <ul>
                        {menuList2.map(({img, title, content}, i) => {
                            return (
                                <li key={i}>
                                    <img src={img} />
                                    <h3>{title}</h3>
                                    <p>{content}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='btn'>
                    <div className='numBtn'>
                        <a href='#'><i className="fa fa-angle-double-left" aria-hidden="true"></i></a>
                        <a>1</a>
                        <a>2</a>
                        <a>3</a>
                        <a>4</a>
                        <a><i className="fa fa-angle-double-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            <hr />
            </div>
        </Section1Container>
    );
});

export default Section1;
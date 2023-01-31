import React, {memo} from 'react';
import styled from 'styled-components';
import mq from '../MediaQuery';
import Workshop from '../assets/img/workshop.jpeg';
import Gondol from '../assets/img/gondol.jpeg';

const FooterContainer = styled.div`
    max-width: 1200px;
    display: flex;
    padding: 32px 8px;
    margin: auto;
    box-sizing: border-box;

    ${mq.maxWidth('sm')`
        flex-wrap: wrap;
    `}

    .footerArea {
        width: 33.33%;
        padding: 8px 16px;

        ${mq.maxWidth('sm')`
        width: 100%
        `}
        
        & h3 {
            font-size: 24px;
        }
        
        & p {
            margin-top: 20px;
            line-height: 1.5em;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.835);
        }
        
        & .w3c {
            color: rgba(0, 0, 0, 0.835);
        }

        & ul {
            margin-top: 25px;
            & li {
                padding: 8px 16px;
                box-sizing: border-box;
                
                & img {
                    float: left;
                    width: 50px;
                }
                & .blogTitle {
                    line-height: 1.6em;
                    padding: 8px 16px;
                }
                & .blogContent {
                    padding: 8px 16px;
                }
            }
            & hr {
                border: solid 1px #eee;
                margin-top: 20px;
            }
        }
        & .tags {
        
            & span {
                display: inline-block;
                text-align: center;
                font-size: 11px;
                padding: 0 8px;
                margin: 0 4px 15px;
                background-color: #666;
                color: #fff;
                font-weight: 500;

                &:first-child {
                    background-color: #000;
                    font-size: 14px;
                    padding: 2px 10px;
                }
            }
            /* margin-right: 10px; */
        }
    }
`

const tag = ['Travel', 'New York', 'Dinner', 'Salmon', 'France', 'Drinks', 'Ideas', 'Flavors', 'Cuisine', 'Chicken', 'Dressing', 'Fried', 'Fish', 'Duck'];

const Footer = memo(() => {
    return (
        <FooterContainer>
            <div className='footerArea'>
                <h3>Footer</h3>
                <p>
                    Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
                </p>
                <p className='w3c'>
                    Powered by <a>w3.css</a>
                </p>
            </div>                
            <div className='footerArea'>
                <h3>BLOG POST</h3>
                <ul>
                    <li className='workshop'>
                        <img src={Workshop} />
                        <span className='blogTitle'>Lorem</span>
                        <br />
                        <span className='blogContent'>Sed mattis nunc</span>
                    </li>
                    <hr />
                    <li className='gondol'>
                        <img src={Gondol} />
                        <span className='blogTitle'>Lorem</span>
                        <br />
                        <span className='blogContent'>Praes tinci sed</span>
                    </li>
                </ul>
            </div>
            <div className='footerArea'>
                <h3>POPULAR TAGS</h3>
                <p className='tags'>
                    {tag.map((v, i) => {
                        return <span key={i}>{v}</span>;
                    })}
                </p>
            </div>
        </FooterContainer>
    );
});

export default Footer;
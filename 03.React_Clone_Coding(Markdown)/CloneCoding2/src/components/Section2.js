import React, {memo} from 'react';
import styled from 'styled-components';
import chef from '../assets/img/chef.jpeg';

const Section2Container = styled.div`
    
    max-width: 1200px;
    font-family: 'Lora', serif;
    // border: 1px solid #000;
    margin: auto;
    padding: 32px 8px;
    
    h3 {
        padding: 10px;
        text-align: center;
        font-size: 23px;
        margin-bottom: 15px;
    }
    .imgWrap {
        img {
            display: block;
            margin: auto;
            width: 66%;
        }

    }
    .introWr {
        margin-top: 45px;
        text-align: center;
        & h4 {
            margin-bottom: 20px;
            & b {
                font-size: 20px;
            font-weight: 400;
            }
        }
        & h6 {
            font-style: italic;
            font-size: 15px;
            margin-bottom: 20px;
            color: rgba(0, 0, 0, 0.813);
        }

        & p {
            line-height: 1.6em;
            font-size: 14px;
            padding: 0 30px;
            margin-bottom: 100px;
            // border: 1px solid #000;

        }
        hr {
            border: solid 1px #eee;
            margin: 10px 0 5px;
        }
    }
`

const Section2 = memo(() => {
    return (
        <Section2Container>
            <h3>About Me, The Food Man</h3>
            <br />
            <div className='imgWrap'>
                <img src={chef} />
            </div>
            <div className="introWr">
                <h4>
                    <b>I am Who I Am!</b>
                </h4>
                <h6>
                    <i>With Passion For Real, Good Food</i>
                </h6>                    
                <p>
                    Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
                </p>
            <hr />
            </div>
        </Section2Container>
    );
});

export default Section2;
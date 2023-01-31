import React from 'react';
import styled from 'styled-components';
import Architect from '../assets/img/architect.jpeg'
import mq from '../MediaQuery';

const MainSection1Container = styled.div`
    max-width: 1500px;
    margin: auto;
    position: relative;
    
    img {
        width: 100%;
    }

    .center_logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        .center_logo h1 {
            display: block;
            text-align: center;
            
        }
        & span {
            font-size: 35px;
            color: #fff;
            letter-spacing: 3px;
            opacity: 0.9;
            ${mq.maxWidth('sm')`
                display: none;
            `}
        }
        & b {
            font-size: 35px;
            color: #fff;
            letter-spacing: 3px;
            opacity: 0.9;
            background-color: rgba(0, 0, 0, 0.814);
            padding: 6px 18px;
            font-weight: 700;
            letter-spacing: 6px;
        }
    }
`

const MainSection1 = () => {
    return (
        <MainSection1Container>
            <img src={Architect} />
            <div className='center_logo'>
                <h1>
                    <b>BR</b><span> Architects</span>
                </h1>
            </div>
        </MainSection1Container>
    );
};

export default MainSection1;
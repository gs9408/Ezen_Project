import React from 'react';
import styled from 'styled-components';
import mq from '../MediaQuery';
import house2 from '../assets/img/house2.jpeg';
import house3 from '../assets/img/house3.jpeg';
import house4 from '../assets/img/house4.jpeg';
import house5 from '../assets/img/house5.jpeg';

const MainSection2Container = styled.div`
    margin: auto;
    max-width: 1500px;
    .sectionTitle {
        h3 {
           padding: 10px;
           margin-top: 60px;
           font-size: 24px;
       }
    }

    hr {
        border: solid 1px #eee;
        margin: 15px 0 30px;
    }

    .sectionProjects1 {
        overflow: hidden;
        
        .imgWrap {
            float: left;
            width: 25%;
            padding: 10px;
            box-sizing: border-box;
            /* border: 1px solid #000; */
            ${mq.maxWidth('lg')`
                width: 50%;
                `}
            ${mq.maxWidth('sm')`
                width: 100%;
                `}
            .imgDisp {
                position: relative;
                .imgName {
                    position: absolute;
                    width: 120px;
                    text-align: center;
                    padding: 10px;
                    background-color: #000;
                    color: #fff;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                img {
                    width: 100%;
                }
            }
        }   
    }
`

const MainSection2 = () => {
    return (
        <MainSection2Container>
            <div className='sectionTitle'>
                <h3>Projects</h3>
            </div>
            <hr />
            <div className='sectionProjects1'>
                <div className='imgWrap'>
                    <div className='imgDisp'>
                        <div className='imgName'>Summer House</div>
                        <img src={house5} />
                    </div>
                </div>
                <div className='imgWrap'>
                    <div className='imgDisp'>
                        <div className='imgName'>Brick House</div>
                        <img src={house2} />
                    </div>
                </div>
                <div className='imgWrap'>
                    <div className='imgDisp'>
                        <div className='imgName'>Renovated</div>
                        <img src={house3} />
                    </div>
                </div>
                <div className='imgWrap'>
                    <div className='imgDisp'>
                        <div className='imgName'>Barn House</div>
                        <img src={house4} />
                    </div>
                </div>
            </div>
            <div className='sectionProjects1'>
                <div className='imgWrap'>
                    <div className='imgDisp'>
                        <div className='imgName'>Brick House</div>
                        <img src={house2} />
                    </div>
                </div>
                <div className='imgWrap'>
                    <div className='imgDisp'>
                        <div className='imgName'>Summer House</div>
                        <img src={house5} />
                    </div>
                </div>
                <div className='imgWrap'>
                    <div className='imgDisp'>
                        <div className='imgName'>Barn House</div>
                        <img src={house4} />
                    </div>
                </div>
                <div className='imgWrap'>
                    <div className='imgDisp'>
                        <div className='imgName'>Renovated</div>
                        <img src={house3} />
                    </div>
                </div>
            </div>
        </MainSection2Container>
    );
};

export default MainSection2;
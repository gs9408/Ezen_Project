import React from 'react';
import styled from 'styled-components';
import mq from '../MediaQuery';
import team1 from '../assets/img/team1.jpeg'
import team2 from '../assets/img/team2.jpeg'
import team3 from '../assets/img/team3.jpeg'
import team4 from '../assets/img/team4.jpeg'

const MainSection3Container = styled.div`
    .aboutTitle {
        max-width: 1500px;
        margin: auto;
        h3 {
            font-size: 24px;
            /* margin-bottom: 30px; */
            padding: 0 20px;
            margin: 40px 0 20px;
            box-sizing: border-box;
        }
     
        hr {
            border: solid 1px #eee;
            padding: 0 20px;
        }
        p {
            padding: 20px;
            line-height: 1.4em;
            margin: 5px 0;
        }
    }

    .characterCard {
        max-width: 1500px;
        overflow: hidden;
        margin: auto;
        /* border: 1px solid #000; */
        
        .characterCardSub {
            margin-top: 40px;
            float: left;
            width: 25%;
            padding: 10px;
            box-sizing:border-box;
            /* border: 1px solid #000; */

            ${mq.maxWidth('lg')`
                width: 50%;
                `}
            ${mq.maxWidth('sm')`
                width: 100%;
                `}

            img {
                width: 100%;
                filter: grayscale(0.7);
            }
            
            .name {
                font-size: 25px;
                margin-top: 12px;
            }

            .job {
                margin: 20px 0;
                font-size: 16px;
                color: rgba(0, 0, 0, 0.639);
            }

            .introduce {
                line-height: 1.4em;
                margin-bottom: 13px;
            }

            p .btn {
                width: 100%;
                padding: 11px;
                border: 0;
                font-size: 16px;
                font-weight: 500;

                &:hover {
                    cursor: pointer;
                    background-color: #ccc;
                }
            }
        }
    }
`

const MainSection3 = () => {
    return (
        <MainSection3Container>
            <div className='aboutTitle'>
                <h3>About</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="characterCard">
                <div className="characterCardSub">
                    <img src={team2} alt="" />
                    <h3 className="name">John Doe</h3>
                    <p className="job">CEO & Founder</p>
                    <p className="introduce">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p>
                        <button type="button" className="btn">Contact</button>
                    </p>
                </div>
                <div className="characterCardSub">
                    <img src={team1} alt="" />
                    <h3 className="name">John Doe</h3>
                    <p className="job">Architect</p>
                    <p className="introduce">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p>
                        <button type="button" className="btn">Contact</button>
                    </p>
                </div>
                <div className="characterCardSub">
                    <img src={team3} alt="" />
                    <h3 className="name">Mike Ross</h3>
                    <p className="job">Architect</p>
                    <p className="introduce">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p>
                        <button type="button" className="btn">Contact</button>
                    </p>
                </div>
                <div className="characterCardSub">
                    <img src={team4} alt="" />
                    <h3 className="name">Dan Star</h3>
                    <p className="job">Architect</p>
                    <p className="introduce">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p>
                        <button type="button" className="btn">Contact</button>
                    </p>
                </div>
            </div>
        </MainSection3Container>
    );
};

export default MainSection3;
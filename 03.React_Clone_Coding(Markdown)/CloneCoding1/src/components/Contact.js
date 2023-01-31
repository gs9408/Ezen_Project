import React from 'react';
import styled from 'styled-components';

const MainSection4Container = styled.div`
    margin-top: 37px;

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
        padding: 23px 0;
    }

    .myform {
        padding: 20px;
        box-sizing: border-box;
        & input {
            overflow: hidden;
            border: 1px solid #ccc;
            display: block;
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            box-sizing: border-box;
        }

        & .btn {
            border: 0;
            width: 150px;
            padding: 10px;
            margin: 20px 0;
            background-color: #000;
            color: #fff;
            font-size: 15px;

            &:hover {
                background-color: #ccc;
                color: #000;
                cursor: pointer;
            }
        }
    }
`

const MainSection4 = () => {
    return (
        <MainSection4Container>
            <h3>Contact</h3>
            <hr />
            <p>Lets get in touch and talk about your next project.</p>
            <form className="myform">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <input type="text" placeholder="Comment" />
                <button type="button" className="btn">SEND MESSAGE</button>
                <div className="map">
                    <img src="./img/map.jpeg" alt="" />
                </div>
            </form>
        </MainSection4Container>
    );
};

export default MainSection4;
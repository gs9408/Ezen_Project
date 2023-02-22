import styled from "styled-components";

const FindPwResultStyle = styled.div`
    /* border: 1px solid #000; */
    width: 700px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.2) inset;

    .temporaryPw {
        width: 205px;
        /* border: 1px solid #000; */
        margin: 40px auto;

        h2 {
            font-size: 28px;
            font-weight: bold;
        }
    }
    .pwMsg {
        /* border: 1px solid #000; */
        width: 75%;
        margin: 40px auto;
        p {
            font-size: 18px;
            text-align: center;
        }
    }
    .fPwBtn {
        display: block;
        width: 70%;
        margin: 0 auto 40px;;
        font-size: 18px;
        padding: 5px 18px;
        border-radius: 7px;
        background-color: #eee;
        border: 1px solid #999;

        &:hover {
            cursor: pointer;
            background-color: #ddd;
        }
    }
`;

export default FindPwResultStyle;
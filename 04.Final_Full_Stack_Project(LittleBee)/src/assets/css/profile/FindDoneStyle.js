import styled from "styled-components";

const FindDone = styled.div`
    width: 700px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.2) inset;
    border-radius: 15px;
    h2 {
        text-align: center;
        font-size: 40px;
        padding-top: 30px;
        padding-bottom: 40px;
    }
    .signDone {
        font-size: 20px;
        text-align: center;
    }
    form {
        background-color: #c9e6f6;
        width: 80%;
        margin: 10px auto;
        text-align: center;
        padding: 10px;
        padding-bottom: 40px;
        border-radius: 10px;

        .doneName {
            padding-top: 30px;
            padding-bottom: 30px;
            font-size: 20px;
        }

        .doneId {
            font-size: 20px;
        }
    }
    .doneButton {
        width: 80%;
        margin: 10px auto;
        text-align: center;
        padding: 10px;
        .button {
            width: 180px;
            background-color: #eee;
            border: 1px solid #999;
            display: inline-block;
            cursor: pointer;
            color: #120a15;
            font-size: 15px;
            padding: 15px 40px;
            text-decoration: none;
            text-shadow: 0 1px 0 #2f6627;
            margin: auto;
            border-radius: 15px;
            &:hover {
                background-color: #c9e6f6;
            }
            &:first-child {
                margin-right: 20px;
            }
        }
    }
`;

export default FindDone;

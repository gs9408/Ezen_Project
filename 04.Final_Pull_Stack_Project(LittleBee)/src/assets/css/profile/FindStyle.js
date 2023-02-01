import styled from "styled-components";

const FindStyle = styled.div`
    width: 700px;
    margin: 60px auto;
    padding: 20px;
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.2) inset;
    h2 {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        padding-top: 30px;
        margin-bottom: 50px;
        color: #555;
    }

    form {
        width: 80%;
        margin: 10px auto;
        text-align: center;
        padding: 10px;

        input[type="radio"] {
            width: 15px;
            margin-right: 10px;
            height: 15px;
        }

        .radiobox {
            label {
                font-size: 15px;
                display: inline-block;
                margin-bottom: 30px;
                width: 150px;
            }
        }

        .inputWrap {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            .user_Id,
            .user_Pw {
                margin: 15px 0;

                input {
                    width: 200px;
                    height: 35px;
                    border: 0;
                    border-bottom: 1px solid #ccc;
                    padding-left: 10px;
                    margin: auto;
                }

                label {
                    display: inline-block;
                    font-size: 15px;
                    width: 80px;
                    text-align: left;
                }
            }
        }

        .FindPhone {
            &.active {
                display: none;
            }
        }

        .FindEmail {
            &.active {
                display: none;
            }
        }

        .FindButton {
            .button {
                background-color: #efefef;
                border: 3px solid #efefef;
                display: inline-block;
                cursor: pointer;
                color: #555;
                font-size: 15px;
                font-weight: bold;
                padding: 5px 15px;
                margin: 0 10px 0 0;
                text-decoration: none;
                margin-top: 30px;
                margin-bottom: 20px;
                border-radius: 15px;
                &:hover {
                    background-color: #c9e6f6;
                    border: 3px solid #a1bece;
                    font-weight: bold;
                    box-sizing: border-box;
                    transition: 0.3s;
                }
            }
        }
    }
`;
export default FindStyle;

import styled from "styled-components";

const Wrap = styled.div`
    h1 {
        text-align: center;
        margin: 20px 0;
        font-size: 23px;
        font-weight: bold;
    }
   .orderWrap {
        width: 600px;
        margin: auto;

        .itemInfo {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
            color: #555;

            &:first-of-type {
                border-top: 3px solid #aaa;
            }

            input { margin: 0 10px;}

            .box {
                display: flex;
                /* width: 50%; */

                .imgbox {
                    width: 85px;
                    height: 85px;
                    align-items: center;

                    img {
                        width: 85px;
                    }
                }

                .box1 {
                    /* flex: 1; */
                    margin: 5px 0 5px 15px;
                    font-size: 13px;
                    width: 370px;

                    p {
                        margin: 5px 0;

                        &:last-of-type {
                            color: #999;
                            font-size: 11px;
                        }
                    }
                }

                .review {
                    width: 100px;
                    box-sizing: border-box;
                    border-left: 1px dotted #ccc;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    p {
                        font-size: 13px;
                    }
                }
            }
        }

        .refundMoney {
            text-align: center;
            margin-bottom: 20px;
            background-color: #eee;
            padding: 10px 0;

            p {
                color: #555;

                span {
                    font-weight: bold;
                    border-bottom: 1px solid #000;
                }
            }
        }
        
        .checkAgree {
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;

            input {
                margin-right: 10px;
            }

            label {
                font-size: 14px;
            }
        }

        .button {
            padding: 30px 20px 20px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;

            button {
                padding: 10px 20px;
                border: 3px solid #efefef;
                display: inline-block;
                color: #555;
                background-color: #efefef;
                box-sizing: border-box;
                cursor: pointer;

                &:first-of-type {
                margin-right: 20px;
            }

                &:hover {
                    background-color: #c9e6f6;
                    border: 3px solid #a1bece;
                    font-weight: bold;
                    box-sizing: border-box;
                    transition: 0.3s;
                }
            }
        }

        .chReOREx {
            margin-bottom: 10px;

            select {
                width: 100px;
                height: 20px;
                font-size: 15px;
            }
        }

        .reason {
            margin: 20px 0;
            select {
                width: 100px;
                height: 20px;
                margin-bottom: 10px;
            }

            textarea {
                width: 100%;
                height: 50px;
                padding: 5px;
                resize: none;
            }
        }

        .submitBox {
            p {
                text-align: center;
                font-size: 15px;
                margin: 20px 0;

                span {color:red;}
            }
        }

        /* select 태그의 id가 changeOP로 된 선택자 */
        select[id^=changeOP] {
            display: none;
            width: 100px;
        }
   }
`

export default Wrap;
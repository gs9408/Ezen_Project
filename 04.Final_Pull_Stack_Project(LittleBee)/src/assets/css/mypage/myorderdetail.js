import styled from "styled-components";

const Wrap = styled.div`
    h3 {
        font-size: 23px;
        margin-bottom: 10px;
        font-weight: bold;
    }

    .state {
        width: 100%;
        font-size: 12px;
        margin-bottom: 15px;
        color: #777;

        span:last-of-type {
            margin-left: 10px;
        }
    }

    .itemstate {
        padding: 10px 0;
        font-size: 15px;
        font-weight: bold;
        margin-left: 10px;
        color: #555;
    }

    .itemInfo {
        display: flex;
        border-bottom: 1px solid #ccc;
        color: #555;
        
        &:first-of-type {
            border-top: 3px solid #aaa;
        }

        div:first-of-type {
            display: flex;
            width: 80%;

            .imgbox {
                width: 100px;
                height: 100px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .box1 {
                flex : 1;
                margin: 10px 0 0 15px;
                font-size: 13px;

                p {
                    margin: 5px 0;

                    &:last-of-type {
                        color: #999;
                        font-size: 11px;
                    }
                }
            }

            .box2 {
                text-align: center;
                font-size: 13px;

                &:before {
                    content: '';
                    display: inline-block;
                    vertical-align: middle;
                    height: 45%;
                }
            }

        }

        div:last-of-type {
            width: 20%;
        }

        .review {
            padding: 10px 0;
            box-sizing: border-box;
            border-left: 1px dotted #ccc;
            display: flex;
            flex-direction: column;
            justify-content: center;

            button {
                display: block;
                margin:  5px auto;
                width: 100px;
                border: 0;
                padding: 2px 0;

                &:hover {
                    background-color: #ccc;
                }

                a {
                    display: block;
                    width: 100%;
                }
            }
        }
    }

    .userinfo {
        h3 {
            border-bottom: 1px dotted #ccc;
            padding: 10px 0;
            font-size: 14px;
            color: #555;
        }

        div {
            display: flex;
            margin-bottom: 10px;
            font-size: 13px;
            color: #777;
            
            ul {
                margin: 0 10px;
                
                li {
                    margin: 5px 0;
                }
            }
        }
    }

    .payinfo {
        h3 {
            border-top: 1px solid #ccc;
            border-bottom: 1px dotted #ccc;
            padding: 10px 0;
            font-size: 14px;
            color: #555;
        }

        .paywrap {
            margin: 0 10px;
            font-size: 13px;

            .payment {
                color: #777;
            }

            li {
                margin: 5px 0;
            }
        }

        .amount {
            width: 25%;
            font-size: 14px;

            .border {
                border-bottom: 1px solid #000;

                ul:last-child {
                    text-align: right;
                }
            }

            div {
                margin-top: 5px;
            }
        }
    }

    .flex_between {
        display: flex;
        justify-content: space-between;
    }

`

export default Wrap;
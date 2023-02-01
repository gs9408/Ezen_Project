import styled from "styled-components";

const DetailProductContainer = styled.div`
    width: 980px;
    margin: auto;

    & .productTitle{
        font-size: 28px;
        margin-bottom: 20px;
    }

    .purchaseDetail {
        width: 100%;
        display:flex; 
        flex-direction: row;
        
        & .sliderImgArea {
            width: 50%;
        }
        & .purchaseArea {
            width: 490px;
            padding: 30px;

            & .productTitle {
                font-weight: 500;
            }
            & .titleArea {
                float: left;

                & p {
                    margin-bottom: 15px;
                    margin-right: 30px;
                     &:first-child {
                        color: #000;
                        font-weight: bold;
                     }
                }
            }
            & .priceArea {
                & p {
                    margin-bottom: 15px;
                    &:first-child {
                        color: #000;
                        font-weight: bold;
                     }
                }
            }
            & .selectArea {
                margin-top: 40px;
                & h3 {
                    font-size: 16px;
                    font-weight: 500;
                    margin-bottom: 10px;
                }
                & .selectOption {
                    padding: 3px;
                    width: 100%;
                    border: 1px solid #ccc;
                }
            }
            & .numBtn {
                display: flex;
                flex-direction: row-reverse;
                
                .quantity {
                    border: 1px solid #ccc;
                    display: inline-block;
                    margin: 20px 3px 10px;
                    width: 40px;
                    text-align: center;
                    padding: 3px 0;
                    box-sizing: border-box;
                }

                & .mBtn,
                & .pBtn {
                    border: 0;
                    margin: 0;

                    &:hover {
                        background-color: #ccc;
                    }
                }
            }
            & hr {
                margin: 20px 0;
            }

            & .selectProduct {
                color: #888;
                font-size: 12px;
            }

            & .total {
                margin-top: 10px;
                margin-bottom: 10px;
                display: flex;
                justify-content: space-between;
                color: #666;

                & .totalPrice,
                & .totalNum {}

                & .totalPrice {
                    font-size: 22px;
                }
                & .totalNum {
                    font-size: 14px;
                }

            }
            & .btnArea {
                & .purchaseBtn {
                    width: 100%;
                    padding: 13px;
                    font-weight: bold;
                    background-color: #000;
                    color: #fff;
                    margin-bottom: 10px;
                    &:hover {
                        cursor: pointer;
                    }
                }
                & .basket{
                    & .btn {
                        width: 100%;
                        padding: 13px;
                        margin-right: 10px;
                        font-weight: bold;
                        background-color: #fff;
                        border: 1px solid #ccc;

                        &:hover {
                            cursor: pointer;
                        }
                    }
                }
            }
            .setInput {
                .selectOpt {
                    border: 1px solid #ccc;
                    margin-bottom: 10px;
                    padding: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    &:last-child {
                        margin-bottom: 20px;
                    }

                    &.active {
                        display: none;
                    }

                    p {
                        font-size: 13px;
                        margin-bottom: 10px;
                    }

                    .btnW {
                        display: flex;
                        flex-direction: column;
                        background-color: #eee;
                    }

                    .wrapOpt {
                        border: 1px solid #eee;
                        width: 71.3px;
                        input {
                            width: 30px;
                            text-align: center;
                            border: 0;
                        }

                        button {
                            border: 0;
                        }
                    }

                    span {
                        font-size: 15px;
                    }
                }
            }
        }
    }
    & .scrollBox1,
    & .scrollBox2,
    & .scrollBox3 {
        margin-bottom: 25px;
        width: 980px;

        & .link1,
        & .link2,
        & .link3 {
            display: flex;
            justify-content: space-between;
            & .linkBtn {
                
                width: 25%;
                text-align: center;
                
                background-color: #F8F8F8;
                border-top: 1px solid #eee;
                border-bottom: 1px solid #eee;
                border-right: 1px solid #eee;
                color: #fff;
                
                & .asd {
                    display: block;
                }
                
                &:first-child {
                    border-left: 1px solid #eee;
                }

                &:hover {
                    cursor: pointer;
                    background-color: #fff;
                }
                a {
                    display: block;
                    padding: 30px 0;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    & .scrollBox1 {
        & ul {
            & li {
                &:first-child {
                    background-color: #fff;
                }
            }
        }
    }
    & .scrollBox2 {
        & ul {
            & li {
                &:nth-child(2) {
                    background-color: #fff;
                }
            }
        }
    }
    & .scrollBox3 {
        & ul {
            & li {
                &:nth-child(3) {
                    background-color: #fff;
                }
            }
        }
    }

    & .description {
        max-width: 980px;
        
        & img {
            width: 980px;
        }
    }

    & .deliveryInfo {
        margin-bottom: 40px;
        & h2 {
            font-size: 20px;
            font-weight: bold;
            margin: 15px 0;
        }
        & p {
            font-size: 13px;
            line-height: 1.6em;
        }
    }
    & #exchangeReturn {
        margin-bottom: 30px;
        & h2 {
            font-size: 20px;
            font-weight: bold;
            margin: 15px 0;
        }
        & p {
            font-size: 13px;
            line-height: 1.6em;
        }
        & .last {
            margin-bottom: 40px;
        }
    }
`;

export default DetailProductContainer;
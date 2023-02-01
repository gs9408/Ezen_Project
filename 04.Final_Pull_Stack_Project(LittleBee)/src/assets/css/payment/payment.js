import styled from "styled-components";

const PaymentContainer = styled.div`
    width: 980px;
    margin: auto;
    padding: 20px;
    box-sizing: border-box;

    h1 {
            text-align: center;
            padding: 20px 0;
            font-size: 23px;
            margin-bottom: 40px;
        }

    .wrap {
        display: flex;
        flex-direction: row;

        .box {
            margin-right: 40px;

            .prodInfo {

                .prodBox {
                    display: flex;
                    padding: 10px 0;
                    border-bottom: 1px dotted #ccc;

                    &:last-of-type {
                        border: 0px;
                    }

                    img {
                        width: 80px;
                        height: 80px;
                        margin-right: 20px;
                        border: 1px solid #eee;
                    }

                    div {
                        width: 80%;
                        padding: 10px 0;

                        p {
                            margin-bottom: 5px;
                        }

                        p:first-child {
                            color: #555;
                            font-size: 13px;
                        }

                        span {
                            font-size: 11px;
                            color: #aaa;
                        }

                        p:last-child {
                            margin-top: 5px;
                            font-size: 14px;
                            text-align: right;
                        }
                    }
                }
            }
    
            .userInfo {

            }
    
            .deliInfo {
                .address {
                    
                    #sample4_postcode {
                        width: 100px;
                    }

                    .adrbutton {
                        width: 40px;
                        padding: 5px 0;
                        border: 0;

                        &:hover {
                            background-color: #ccc;
                            cursor: pointer;
                        }
                    }
                    input {
                        margin-bottom: 4px;

                        &:last-of-type {margin: 0 0 2px;}
                    }
                }
            }
        }

        .payInfo {
            width: 360px;
            height: 600px;

            .payinfoDiv {
                margin-bottom: 40px;
                padding: 20px;
                box-shadow: 0 0px 10px 0 #a1bece inset;

                table {
                    width: 100%;

                    th {
                        text-align: left;
                        padding: 5px 0;
                        color: #777;
                        font-size: 14px;
                    }

                    td {
                        text-align: right;
                    }

                    tfoot{
                        tr {
                            border-top: 1px solid #777;
                            font-weight: bold;

                            th {padding-top: 8px;}
                        }

                    }
                }

                .paymethod {
                    margin: 20px 0;
                    display: flex;
                    flex-wrap: wrap;
                    /* justify-content: center; */

                    label {
                        margin-right: 15px;
                        font-size: 13px;

                        input {
                        margin: 0 5px 20px 19px;
                        }
                    }
                }

                .payselect {
                    border-bottom: 1px dotted #ccc;
                    padding-bottom: 20px;
                    select {
                        height: 30px;
                        border-radius: 0;
                        border: 1px solid #777;
                        font-size: 13px;
                        width: 100%;
                        box-sizing: border-box;
                    }
                    
                    input {
                        width: 100%;
                        margin-top: 10px;
                        box-sizing: border-box;
                        height: 30px;
                        border-radius: 0;
                        border: 1px solid #777;
                        font-size: 13px;
                        padding-left: 5px;
                    }

                    p {
                        font-size: 11px;
                        margin: 10px 0 0 5px;
                        color: #777;
                    }
                }

                .receipt {
                    margin-top: 20px;
                    display: flex;
                    align-items: center;

                    label {
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
            }

            .agree {
                padding: 20px;
                box-shadow: 0 0px 10px 0 #a1bece inset;
                display: flex;
                flex-wrap: wrap;

                p {
                    font-size: 12px;
                    margin: 5px 0 0 25px;
                }
                
                label {
                    font-size: 12px;
                    text-align: left;
                    margin-left: 5px;
                    padding-top: 5px;

                    span {
                        color: red;
                    }
                }

                #submit {
                    display: block;
                    width: 100%;
                    height: 30px;
                    margin-top: 20px;
                    border: 0;

                    &:last-child {
                        margin-top: 10px;
                    }

                    &:hover {
                        background-color: #ccc;
                        transition: 0.3s;
                    }
                }
            }
        }   
    }
    
    .edit {
        margin-bottom: 10px; 
        margin-left: auto;
        border: 0;
        padding: 5px 10px;
        font-size: 12px;
        background-color: #eee;
        width: 30px;
        text-align: center;
        cursor: pointer;

        &:hover {
            background-color: #ccc;
        }
    }

    .table {
        th {
            padding: 10px;
            background-color: #efefef;
            border-bottom: 1px solid #ddd;
            font-size: 13px;
            color: #555;

            &:first-of-type {border-top: 1px solid #ddd;}
        }

        td {
            width: 80%;
            padding-left: 6px; 
            border-bottom: 1px solid #eee;

            .postal {
                width: 30%;
            }

            button {
                font-size: 11px;
                margin-left: 10px;
            }

            input {
                width: 80%;
                font-size: 13px;
                border: 1px solid #ccc;
                padding: 5px;
                color: #333;
            }

            &:first-of-type {border-top: 1px solid #eee;}
        }
    }

    .h3 {
        margin-bottom: 20px;

        &:last-of-type {margin-bottom: 30px;}
    }

    .box_com {
        width: 560px;
        /* height: 200px; */
        margin-bottom: 40px;
        box-shadow: 0 0px 5px 0 #a1bece inset;
        padding: 20px;
    }
`

export default PaymentContainer;
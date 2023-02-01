import styled from "styled-components";

const BaskContainer = styled.div`
    width: 814px;
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, .2) inset;
    padding: 20px 10px;
    box-sizing: border-box;

    h2 {
        font-size: 23px;
        margin: 30px 0 40px;
        text-align: center;
        font-weight: bold;
    }

    .delete > button {
        margin: 5px 3px 0 0;
        border: 0;
        padding: 3px 5px;
        color: #666;

        &:hover {
            background-color: #ccc;
        }
    }

    .table {
        margin-left: auto;
        margin-bottom: 20px;
        text-align: center;
        width: 70%;
        color: #777;

        th {
            padding: 20px 0;
        }

        .All {
            font-weight: bold;
            padding: 3px 10px;
        }
    }

    .orderPayment {
        padding: 30px 20px 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;

        a {
            padding: 10px 20px;
            border: 3px solid #efefef;
            display: inline-block;
            color: #555;
            background-color: #efefef;
            box-sizing: border-box;

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
`
export default BaskContainer;
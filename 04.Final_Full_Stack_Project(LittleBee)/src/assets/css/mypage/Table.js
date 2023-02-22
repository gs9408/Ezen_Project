import styled from "styled-components";

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    th {
        font-size: 15px;
        font-weight: bold;
        padding: 20px 5px;
        color: #777;
        border-bottom: 2px solid #ccc;
        border-top: 2px solid #ccc;

        &:first-child {
            border-left: 0;
        }
    }

    .prodname {
        width: 35%;
    }

    .prodopt {
        width: 15%;
    }

    .prodqty {
        width: 13%;
    }

    tbody {
        tr {
            border-top: 1px #d5d5d5 solid;

            &:first-child {
                border: 0;
            }

            &:last-child {
                border-bottom: 2px solid #ccc;
            }
        }
    }

    td {
        text-align: center;
        font-size: 12px;
        vertical-align: middle;
        color: #777;

        img {
            width: 80px;
            height: 80px;
            border: 1px solid #eee;
            margin: 10px;
        }
    }

    .option {
        padding-top: 23px;
        box-sizing: border-box;
        position: relative;

        button {
            display: block;
            margin: 5px auto 0;
            font-size: 10px;
            border: 0;
            padding: 3px;
            cursor: pointer;

            &:hover, &.active {
                background-color: #ccc;
            }
        }

        .optionChange {
            width: 300px;
            background-color: #fff;
            position: absolute;
            top: 80%;
            left : 0%;
            z-index: 1000;
            display: none;
            border: 1px solid #777;
            padding: 10px;
            box-sizing: border-box;

            .opchanBox {
                background-color: #c9e6f6;
                padding: 10px 0;
                font-size: 13px;
                color: #777;
            }

            p {
                padding: 10px 0;
                font-size: 12px;
            }

            button {
                padding: 5px 15px;
            }

            .select {
                display: flex;
                margin-bottom: 10px;

                select {
                    width: 75%;
                    height: 25px;
                    border-radius: 0;
                }
                span {
                    display: inline-block;
                    width: 25%;
                    font-size: 15px;
                    text-align: left;
                    line-height: 1.6;
                }
            }
        }
    }

    .num {
        form > input {
            border: 1px solid #ccc;
            display: inline-block;
            margin: 0 3px;
            /* padding: 3px 13px 2px; */

            /* margin: 20px 3px 10px; */
            width: 40px;
            height: 20px;
            text-align: center;
            padding: 4px 0 2px;
            box-sizing: border-box;
        }

        button {
            border: 0;
            margin: 0;
            width: 19px;
            height: 20px;
            cursor: pointer;

            &:hover {
                background-color: #ccc;
            }
        }
    }

    .order {
        a {
            color: #777;
            text-decoration: underline;
        }
    }

    .img {
        width: 110px;
    }

    .name {
        text-align: left;
        a {
            color: #777;
            text-decoration: underline;
        }
    }

    .check {
        border-left: 1px solid #eee;
    }

    .after {
        button {
            display: block;
            margin:  5px auto;
            width: 80px;
            border: 0;
            padding: 2px 0;
            font-size: 12px;

            &:hover {
                background-color: #ccc;
            }

            a {
                display: block;
                width: 100%;
            }
        }
    }
`

export default Table;
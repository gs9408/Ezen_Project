import styled from "styled-components";

const Wrap = styled.div `
    width: 814px;

    .navlink {
        display: block;
        margin-bottom: 10px;
        flex-direction: row-reverse;
    }

    .order_list {
        width: 100%;
        padding: 20px 10px;
        box-sizing: border-box;
        /* border: 1px solid #d5d5d5; */
        box-shadow: 0 0px 5px 0 rgba(0, 0, 0, .2) inset;
        margin-bottom: 20px;

        h3 {
            margin: 30px 0 40px;
            text-align: center;
            font-size: 23px;
            font-weight: bold;
        }

    }

    .orderList1 {
        width: 100%;
        box-shadow: 0 0px 5px 0 rgba(0, 0, 0, .2) inset;
        padding: 20px 10px;
        box-sizing: border-box;

        h2 {
            font-size: 23px;
            margin: 30px 0 40px;
            text-align: center;
            font-weight: bold;
        }

        .search_box {
            display: flex;
            float: right;
            margin: 0 20px 30px 0;

            div {
                margin: 0 10px;

                button {
                    border: 1px solid #ccc;
                    padding: 3px 10px;

                    &:hover {
                        background-color: #aaa;
                    }
                }
            }
        }
    }
   
`

export default Wrap;
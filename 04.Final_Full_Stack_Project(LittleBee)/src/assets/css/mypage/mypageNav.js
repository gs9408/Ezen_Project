import styled from "styled-components";

const MyWrap = styled.div `
    margin: 60px auto;
    width: 980px;
    display: flex;

    .side_bar {
        width: 166px;
        padding-top: 20px;
        box-sizing: border-box;
        margin-right: 20px;
        background-color: #fff;
        text-align: center;

        p {
            margin-bottom: 10px;
            color: #a1bece;
        }

        .mypage_logo {
            font-size: 32px;
            text-align: center;
            font-weight: bold;
        }

        .user_info_w {
            padding: 20px 10px;
            box-sizing: border-box;

            h4 {
                margin: 10px 0;
                font-size: 14px;
            }

            div {
                right: 0;
                padding: 5px 0 0 25px;
                text-align: left;

                p {
                    margin: 10px 0;
                    font-size: 14px;
                    color: #777;
                }
            }
        }

        .nav_w {
            padding: 0 10px;
            box-sizing: border-box;
            text-align: right;

            ul {
                li {
                    margin: 20px 0;
                    background-color: #fff;
                    border-bottom: 1px solid #ddd;
                    
                    a {
                        display: block;
                        width: 100%;
                        padding: 10px 10px 10px;
                        color: #777;
                        font-weight: bold;
                        box-sizing: border-box;

                        &:hover {
                            color: #a1bece;
                            transition: 0.3s;
                        }
                    }
                }
            }
        }
    }

    .pageWrap {
        width: 814px;
    }
`

export default MyWrap;
import styled from "styled-components";

const ReviewStyle = styled.div`
    width: 680px;
    padding: 0 10px;
    /* background-color: #acf; */

    .page {
        width: 680px;

        h2 {
            font-size: 17px;
            font-weight: bold;
            padding: 10px 30px;
            background-color: #defa;
        }

        hr {
            border: 1px solid #ccc;
            margin: 0;
        }

        .date {
            width: 640px;
            text-align: right;
            font-size: 15px;
            padding: 10px 0 13px 10px;
            color: #aaa;
        }

        .review_img_box {
            width: 641px;
            margin: 20px;
            padding: 10px;
            box-sizing: border-box;
            background-color: #eee;
        }

        .review_img {
            width: 150px;
            outline: none;
            cursor: pointer;
            padding: 0;
            border: 0;
            margin: 0 7px 0 0;

            &:nth-child(4) {
                margin-right: 0;
                margin-bottom: 7px;
            }
        }

        .text {
            width: 640px;
            padding: 30px 40px;
            margin-bottom: 20px;
            box-sizing: border-box;
            text-align: center;
            margin: 0 20px 20px 20px;
            /* background-color: #555; */
        }
    }

    .review_edit {
        width: 80px;
        height: 30px;
        margin: auto;
        display: block;
        text-align: center;
        line-height: 30px;
        border: 0;
        border-radius: 10px;
        background-color: #555;
        color: #fff;
        margin-bottom: 10px;
    }
`

export default ReviewStyle;
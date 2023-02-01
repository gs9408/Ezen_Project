import styled from "styled-components";

const PostStyle = styled.div`
    margin: auto;
    width: 882px;
    padding-top: 50px;
    padding-bottom: 5px;
    /* background-color: #acf; */
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, .2) inset;

    h1 {
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        color: #555;
        margin-bottom: 30px;
    }

    .page {
        width: 795px;
        margin: auto;

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
            text-align: right;
            font-size: 15px;
            padding: 10px 20px 13px 10px;
            color: #aaa;
        }

        .text {
            width: 795px;
            padding: 30px 40px;
            margin: 20px 0;
            box-sizing: border-box;
            text-align: center;
            /* background-color: #555; */
        }
    }
    
    .next_page {
        width: 795px;
        height: 50px;
        margin: auto;
        border-bottom: 1px solid #ccc;
        cursor: pointer;
        /* background-color: #dea; */

        &:hover {
            background-color: #eeea;
        }

        span {
            width: 120px;
            height: 50px;
            padding-left: 20px;
            display: inline-block;
            line-height: 50px;
        }

        p {
            width: 655px;
            height: 50px;
            display: inline-block;
            line-height: 50px;
        }
    }
`

export default PostStyle;
import styled from "styled-components";

const NoticeStyle = styled.div`
    /* background-color: #fec; */
    margin: auto;
    width: 882px;
    padding-top: 50px;
    padding-bottom: 20px;
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, .2) inset;

    h1 {
        text-align: center;
        font-weight: bold;
        font-size: 24px;
        color: #555;
        margin-bottom: 30px;
    }

    form {
        width: 340px;
        height: 30px;
        background-color: #fff;
        float: right;
        padding: 15px 20px 10px 20px;
        margin-right: 5px;
        margin-bottom: 20px;

        .button {
            width: 100px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            margin: 0;
            border: 1px solid #777;
            border-bottom: 2px solid #777;
            float: left;
            font-weight: bold;
            cursor: pointer;
        }

        .input_text {
            width: 160px;
            height: 28px;
            margin: 0 20px;
            padding: 0 0 0 10px;
            display: block;
            float: left;
            border: 0;
            border-bottom: 2px solid #777;
        }

        .button_submit {
            width: 30px;
            height: 30px;
            display: block;
            float: left;
            border: 0;
            cursor: pointer;
            background-color: #fff;
        }
    }

    .more_button {
        width: 828px;
        height: 30px;
        margin: auto;
        border: 1px solid #ccc;
        font-weight: bold;
        text-align: center;
        line-height: 30px;
        cursor: pointer;

        &:hover {
            background-color: #eeec;
        }
    }
`

export default NoticeStyle;
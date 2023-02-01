import styled from "styled-components";

const ListStyle = styled.div`
    margin: auto;
    max-width: 882px;
    /* background-color: #ddf; */
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
        width: 470px;
        height: 30px;
        background-color: #fff;
        float: right;
        padding: 15px 20px 10px 20px;
        margin-right: 5px;
        margin-bottom: 20px;

        .button {
            width: 150px;
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
        margin-right: 20px;
        display: block;
        float: left;
        border: 0;
        background-color: #fff;
        cursor: pointer;
    }

    .write_button {
        width: 60px;
        height: 30px;
        display: block;
        float: left;
        text-align: center;
        line-height: 30px;
        font-size: 13px;
        border-radius: 10px;
        background-color: #555;
        color: #fff;
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

        display: none;

        &:hover {
            background-color: #eeec;
        }
    }

    .number {
        background-color: #ccc;
        width: 580px;
        height: 30px;
        margin: auto;
        margin-top: 20px;

        .start, .pre, .next, .end {
            background-color: #dac;
            width: 70px;
            height: 30px;
            line-height: 30px;
            font-size: 15px;
            text-align: center;
            display: block;
            float: left;

            &:hover {
                background-color: #aaa;
            }
        }

        .pagenum_box {
            background-color: #aaa;
            width: 300px;
            float: left;

            .pagenum_a {
                height: 30px;

                .pagenum {
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                    font-size: 20px;
                    text-align: center;
                    display: inline-block;
                }
            }
        }
    }
`

export default ListStyle;
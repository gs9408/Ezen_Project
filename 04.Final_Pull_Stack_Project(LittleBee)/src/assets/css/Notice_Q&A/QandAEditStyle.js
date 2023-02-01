import styled from "styled-components";

const QandAEditStyle = styled.div`
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
        width: 795px;
        height: 30px;
        background-color: #fff;
        margin: auto;
        padding: 15px 0;
        margin-bottom: 20px;

        #button01 {
            width: 240px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border: 1px solid #777;
            border-bottom: 2px solid #777;
            float: left;
            font-weight: bold;
            cursor: pointer;
        }

        #button02 {
            width: 415px;
            height: 30px;
            margin: 0 20px;
            line-height: 30px;
            text-align: center;
            border: 1px solid #777;
            border-bottom: 2px solid #777;
            float: left;
            font-weight: bold;
            cursor: pointer;
        }

        .input_submit {
            width: 100px;
            height: 30px;
            display: block;
            float: left;
            border: 0;
            border-radius: 10px;
            background-color: #555;
            color: #fff;
            cursor: pointer;
        }
    }

    .write_box {
        width: 795px;
        margin: auto;
        margin-bottom: 30px;

        .title {
            width: 795px;
            font-size: 17px;
            padding-left: 20px;
            margin-bottom: 30px;
            box-sizing: border-box;
        }

        .textbox {
            width: 795px;
            height: 350px;
            resize: none;
            padding: 20px 0 0 20px;
            box-sizing: border-box;
        }

        /* .ck.ck-content.ck-editor__editable {
            width: 795px;
            min-height: 300px;
            padding: 10px 20px;
            box-sizing: border-box;
        } */
    }

    .img_box {
        width: 775px;
        height: 100px;
        margin: auto;
        margin-bottom: 30px;

        .img_upload {
            width: 100px;
            height: 100px;
            margin-left: 25px;
            float: left;
            position: relative;
            border-radius: 20px;
            border: 5px dashed #c9e6f6;
            background-color: #ecf6fb;
            box-sizing: border-box;

            .circle {
                width: 50px;
                height: 50px;
                position: absolute;
                left: 15px;
                top: 15px;
                border-radius: 50%;
                border: 5px solid #c9d3d8;
            }

            .row {
                width: 30px;
                height: 6px;
                position: absolute;
                left: 30px;
                top: 42px;
                border-radius: 30%;
                background-color: #c9d3d8;
            }

            .col {
                width: 6px;
                height: 30px;
                position: absolute;
                left: 42px;
                top: 30px;
                border-radius: 30%;
                background-color: #c9d3d8;
            }
        }

        .img {
            width: 100px;
            height: 100px;
            margin-left: 25px;
            float: left;
            border-radius: 20px;
            background-color: #ccc;
        }
    }

    .input_send {
        width: 70px;
        height: 30px;
        display: block;
        margin: auto;
        border: 0;
        border-radius: 10px;
        background-color: #555;
        color: #fff;
        cursor: pointer;
    }
`

export default QandAEditStyle;
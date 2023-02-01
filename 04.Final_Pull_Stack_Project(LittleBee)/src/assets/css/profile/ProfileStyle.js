import styled from "styled-components";

const ProfileStyle = styled.div`
    width: 700px;
    margin: auto;

    h2 {
        margin-bottom: 70px;
        font-size: 30px;
        text-align: center;
    }

    h3 {
        font-size: 18px;
    }

    label {
        display: inline-block;
        width: 130px;
        font-size: 15px;
    }

    input {
        width: 300px;
        height: 35px;
        border: 0;
        border-bottom: 1px solid #ccc;
        background-color: #fff;
        padding-left: 10px;
    }

    input[type="radio"] {
        width: 15px;
        margin: 0;
        height: 15px;
    }

    input[type="date"] {
        width: 150px;
    }

    div {
        margin: 30px 0;
    }

    .container {
        width: 85%;
        margin: 50px auto;
        box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.2) inset;
        padding: 50px;

        .required {
            margin: 20px 0;
            h2 {
                font-size: 20px;
                text-align: center;
            }

            .userAdd {
                input {
                    display: block;
                    margin: 20px 0;

                    &:first-of-type {
                        margin: 0;
                    }
                }

                .zipcode {
                    display: inline-block;
                    /* width: 120px; */
                }

                .address,
                .detail_address {
                    margin-left: 130px;
                }
            }

            .passCheck {
                /* display: flex; */

                p {
                    font-size: 13px;
                    color: blue;
                }
            }
        }
    }

    .choice {
        /* margin-top: 0px; */
        border-top: 1px dotted #ccc;
        padding-top: 30px;

        .gender {
            display: flex;
            
            .padding {
                padding: 5px 0;
                font-size: 15px;
            }
            
            .genderbox {
                display: flex;
                margin: 0 20px 0 10px;

                label {
                    width: 60px;
                    font-size: 15px;
                    input {
                        margin-right: 10px;
                    }
                }
            }
        }

        .consent {
            display: flex;
            height: 40px;

            label {
                display: flex;
                width: 200px;

                input {
                    margin-right: 15px;
                }
                p {
                    width: 500px;
                }
            }
            button {
                width: 100px;
                height: 20px;
                border: 0;
                border-radius: 4px;
                background-color: #fff;
                font-size: 12px;
                color: blue;

                &:hover {
                    cursor: pointer;
                }
            }
            .PrivacyPolicyContainer {
                position: fixed;
                width: 780px;
                padding: 40px 0 20px;
                background-color: #fff;
                z-index: 9999;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border: 1px solid #000;
                display: none;
                .fa-solid {
                    font-size: 25px;
                    color: #000;
                    display: block;
                }
                .PrivacyTitle {
                    font-size: 40px;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 40px;
                }
                .PrivacyPolicyBox {
                    width: 500px;
                    height: 500px;
                    overflow: scroll;
                    margin: auto;
                    .seePrivacyPolicy {
                        background-color: #fff;
                        /* display: none; */
                        line-height: 1.8em;
                        /* height: 100px; */
                    }
                }
            }
        }
    }

    .Button {
        margin-left: 10px;
        border: 1px solid #ccc;
        padding: 5px;
        border-radius: 8px;
        cursor: pointer;
    }
    
    .putButton {
        text-align: center;
        
        .submitButton {
            color: #555;
            background-color: #efefef;
            border: 3px solid #efefef;
            display: inline-block;
            cursor: pointer;
            font-size: 15px;
            font-weight: bold;
            padding: 10px 30px;
            text-decoration: none;
            margin-top: 30px;
            border-radius: 15px;
            &:hover {
                background-color: #c9e6f6;
                border: 3px solid #a1bece;
                font-weight: bold;
                box-sizing: border-box;
                transition: 0.3s;
            }
        }
    }
`;

export default ProfileStyle;
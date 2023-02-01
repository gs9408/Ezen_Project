import styled from "styled-components";

const FindPassword = styled.div`
    width: 700px;
    margin: 60px auto;
    padding: 20px;
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.2) inset;
    
    form {
        width: 80%;
        margin: 10px auto;
        text-align: center;
        padding: 10px;
        
        h2 {
            font-size: 30px;
            font-weight: bold;
            text-align: center;
            padding-top: 30px;
            margin-bottom: 50px;
            color: #555;
        }

        .findType {
            input[type="radio"] {
                width: 15px;
                margin: 10px;
                height: 15px;
            }
            label {
                font-size: 15px;
                display: inline-block;
                /* margin-bottom: 30px; */
                width: 160px;
            }
        }

        .infoWrite > div > label {
            display: inline-block;
            width: 80px;
            font-size: 15px;
            /* margin-right: 10px; */
            text-align: left;
        }

        .infoWrite {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            .userName,
            .userId,
            .emailAddress,
            .phoneNum {
                margin: 15px 0;
                input {
                    width: 200px;
                    height: 35px;
                    border: 0;
                    border-bottom: 1px solid #ccc;
                    padding-left: 10px;
                    margin: auto;
                }
            }
            .emailAddress {
                &.active {
                    display: none;
                }
            }
            .phoneNum {
                &.active {
                    display: none;
                }
            }
        }

        /* input {
            width: 300px;
            height: 35px;
            border: 0;
            border-bottom: 1px solid #ccc;
            background-color: #f7f7f7;
            padding-left: 10px;
        } */
        
        div {
            margin: 30px 0;
        }
    }

	.Button {
		background-color: #efefef;
        border: 3px solid #efefef;
        display: inline-block;
        cursor: pointer;
        color: #555;
        font-size: 15px;
        font-weight: bold;
        padding: 10px 30px;
        text-decoration: none;
        margin-top: 30px;
        margin-bottom: 20px;
        border-radius: 15px;

		&:hover {
            background-color: #c9e6f6;
            border: 3px solid #a1bece;
            font-weight: bold;
            box-sizing: border-box;
            transition: 0.3s;
        }
        &:active {
            position: relative;
            top: 1px;
        }
	}

	.putButton {
		text-align: center;
        
		.submitButton {
            cursor: pointer;
			padding: 5px 15px;
			margin: 0 10px 0 0;
			font-size: 18px;
		}
	}
`;
export default FindPassword;
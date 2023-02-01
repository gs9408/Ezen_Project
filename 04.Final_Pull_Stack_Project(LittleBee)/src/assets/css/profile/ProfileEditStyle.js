import styled from "styled-components";

const ProfileStyle = styled.div`
	width: 700px;
	margin: auto;
    form {
        
    }
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
		width: 100px;
		font-size: 13px;
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
        box-shadow: 0 0px 5px 0 rgba(0, 0, 0, .2) inset;
        padding: 50px;

    .required {
        width: 430px;
		margin: 20px auto;
		h2 {
			font-size: 20px;
			text-align: center;
		}

        .userPass {
            .change_pw {
                border-bottom: 1px solid #ccc;
                background-color: #f7f7f7;
                padding: 5px 19px;
                color: #777;
            }
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
				width: 100px;
			}

			.address, .detail_address {
				margin-left: 100px;
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

	.Button {
		margin-left: 10px;
		border: 1px solid #ccc;
		padding: 5px;
		border-radius: 5px;
        cursor: pointer;
		&:hover {
			background-color: #ccc;
		}
	}

	.putButton {
		text-align: center;

		.submitButton {
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
		}
	}
`;

export default ProfileStyle;

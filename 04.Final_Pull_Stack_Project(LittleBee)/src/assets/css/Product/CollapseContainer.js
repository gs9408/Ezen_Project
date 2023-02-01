import styled from "styled-components";

const CollapseContainer = styled.div`
    .detailPageCollapse {

        .collapse-title1,
        .collapse-title2 {
            background-color: #bababa;
            color: white;
            cursor: pointer;
            padding: 18px;
            width: 980px;
            box-sizing: border-box;
            border: none;
            font-weight: normal;
            margin: 0;
            text-align: left;
            outline: none;
            font-size: 15px;
            border-bottom: 1px solid #fff;
    
    
            &.active, &:hover {
                background-color: #555;
            }
        }
    
        .collapse-content {
            padding: 0 18px;
            max-height: 0;
            width: 944px;
            overflow: hidden;
            transition: max-height 0.2s ease-out;
            background-color: #fff;
    
            & .reviewArea {
                /* border: 1px solid #000; */
                width: 944px;
                & .userId {
                    font-size: 19px;
                    padding: 15px 0;
                }
                & .reviewTitle {
                    line-height: 1.8em;
                    font-weight: bold;
                }
                & .reviewContent {
                    line-height: 1.8em;
    
                }
                & .reviewImg {
                    width: 120px;
                    margin-right: 10px;
                }
                & hr {
                    border: solid 1px #eee;
                    margin: 20px 0;
                }
            }
        }
        .reviewBtn {
            display: block;
            border: 0;
            margin: 15px auto;
            padding: 15px 30px;
            border-radius: 10px;
            background-color: #555;
            color: #fff;
            font-weight: bold;
    
            &:hover {
                cursor: pointer;
            }
        }
        .reviewWrite {
            display: none;
            position: fixed;
            z-index: 99999;
            bottom: 150px;
            right: 100px;
            background-color: #fff;
            border: 1px solid #ddd;
            padding: 20px;
            width: 400px;
            margin: auto;
    
            .reviewProductBox {
                display: flex;
                & .productImgReview {
                    width: 60px;
                }
        
                & .productImgTitle {
                    font-weight: bold;
                    margin-left: 10px;
                    font-size: 15px;
                }
            }
    
            & .reviewAuthor {
                margin-bottom: 10px;
            }
            & .addImage {
                width: 80px;
                height: 80px;
                line-height: 80px;
                text-align: center;
                display: inline-block;
                border: 1px solid #ddd;
                margin-right: 10px;
                
                &:last-of-type {
                    margin-right: 0;
                }
    
                &:hover {
                    cursor: pointer;
                }
            }
            & .fileUpload {
                margin: 10px 0 0;
            }
            & .reviewForm {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
        
                & .reviewWriteTitle {
                    width: 400px;
                    margin: 10px 0;
                    padding: 5px 5px 5px 10px;
                    border: 1px solid #ddd;
                    border-radius: 0;
                }
                & .reviewWriteContent {
                    width: 400px;
                    height: 100px;
                    resize: none;
                    padding: 5px 5px 5px 10px;
                    margin-bottom: 10px;
                    border: 1px solid #ddd;
                    border-radius: 0;
                }
                & .reviewSRBtn {
                    padding: 4px;
                    width: 100px;
                    margin-right: 10px;
                    border: 0;
                    border-radius: 5px;
                    background-color: #ddd;
    
                    &:hover {
                        cursor: pointer;
                    }
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
        & .collapse-content {
            & .inquiryTable {
                & .tableHead {
                    & th {
                        font-size: 14px;
                        font-weight: bold;
                    }
                    .tableContent {
                        width: 600px;
                    }
                }
                & .tableBody {
                    td {
                        /* width: 100px; */
                        padding: 15px;
                        box-sizing: border-box;
                        font-size: 12px;

                        & .tableBodyContent {
                            display: -webkit-box;
                            /* display: block; */
                            overflow: hidden;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            transition: 0.3s;

                            & .active {
                                display: block;
                            }
                            &:hover {
                                cursor: pointer;
                                color: #999;
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default CollapseContainer;
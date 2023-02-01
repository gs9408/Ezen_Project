import styled from "styled-components";

const ProductListContainer = styled.ul`
    width: 780px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-left: 30px;
    margin-bottom: 50px;
    
    a {
        width: 185px;
        height: 235px;
        margin: 20px 5px;
        /* border: 1px solid #000; */
        li {
            width: 100%;
            /* height: 235px; */
            padding: 10px;
            box-sizing: border-box;
            & img {
                width: 100%;
                transition: 0.4s;
                &:hover {
                    opacity: 0.6;
                }
            }
            & p {
                font-size: 14px;
                text-align: center;
                color: #999;
                transition: 0.3s;
            }
            & .title {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                &:hover {
                    color: #eee;
                }
            }
            & .line {
                width: 20px;
                border: 1px solid #999;
                margin: 15px auto;
            }
            & .price {
                /* margin-bottom: 60px; */
            }
        }
    }   
`

export default ProductListContainer;
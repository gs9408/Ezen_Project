import styled from "styled-components";

const ProductsContainer = styled.div`
    width: 980px;
    display: flex;
    justify-content: center;
    margin: auto;
    
    & .categoryBox {
        list-style: none;  
        width: 20%;
        margin-top: 30px;

        & h1 {
            font-size: 30px;
            text-align: center;
            color: #a1bece;
            font-weight: bold;
            margin-bottom: 20px;
        }
    
        & .link {
            display: block;
            width: 179px;
            height: 48px;
            background-color: #fff;
            border-bottom: 1px solid #ddd;
            line-height: 48px;
            text-align: center;
            font-weight: 300;
            color: #777;
            text-decoration: none;
    
            &:hover {
                background-color: #aaa;
                color: #fff;
            }
        }
        & .title {
            font-weight: 700;
        }
    
        & .menuItem {
            /* position: relative; */
            width: 200px;
            .sub {
                list-style: none;
                margin: 0;
                padding: 0;
                /* position: absolute; */
                z-index: 1000;
                max-height: 0;
                overflow: hidden;
                transition: max-height 180ms ease-out;
            }
        }
    }

    .route {
        margin-bottom: 30px;
    }
`;


export default ProductsContainer;
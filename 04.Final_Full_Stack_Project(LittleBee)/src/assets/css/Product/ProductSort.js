import styled from "styled-components";

const ProductSort = styled.div`
    width: 980px;
    display: flex;
    justify-content: right;
    margin-right: 20px;
    margin: 10px auto;
    
    & .sortBtn {
        outline: 0;
        border: 0;
        background-color: #fff;
        color: #666;
        margin-right: 10px;
        font-size: 15px;
        &:hover {
            cursor: pointer;
            color: #999;
        }
    }
`;

export default ProductSort;
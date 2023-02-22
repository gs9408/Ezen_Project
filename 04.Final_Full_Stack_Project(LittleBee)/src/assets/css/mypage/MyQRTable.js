import styled from 'styled-components';

const MyQRTable = styled.table`
    border-collapse: collapse;
    border-top: 3px solid #ccc;
    border-bottom: 2px solid #ccc;
    margin: auto;
    width: 680px;
    text-align: center;
    font-size: 15px;
    background-color: #fff;

    th{
        border-bottom: 2px solid #ccc;
        padding: 10px;
        font-weight: bold;
        background-color: #defa;

        &:first-child {
        }
        &:nth-child(2) {
            width: 80px;
        }
        &:nth-child(3) {
            width: 80px;
        }
        &:nth-child(4) {
            width: 300px;
        }
        &:last-child {
        }
    }

    td{
        border-bottom: 1px #d5d5d5 solid;
        padding: 10px;
        cursor: pointer;
        
        &:last-child {
            color: #999;
        }
    }
`

export default MyQRTable;
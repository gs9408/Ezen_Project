import styled from 'styled-components';

const QandATable = styled.table`
    border-collapse: collapse;
    border-bottom: 2px solid #ccc;
    margin: auto;
    width: 830px;
    text-align: center;
    font-size: 15px;
    background-color: #fff;

    th{
        border-bottom: 2px solid #ccc;
        padding: 10px;
        font-weight: bold;
        background-color: #c9e6f6;

        &:first-child {
        }
        &:nth-child(2) {
            width: 100px;
        }
        &:nth-child(3) {
            width: 100px;
        }
        &:nth-child(4) {
            width: 300px;
        }
        &:last-child {
        }
    }

    td{
        border-bottom: 1px #d5d5d5 solid;
        padding-top: 20px;
        height: 30px;
        cursor: pointer;
        
        &:last-child {
            color: #999;
        }
    }
`

export default QandATable;
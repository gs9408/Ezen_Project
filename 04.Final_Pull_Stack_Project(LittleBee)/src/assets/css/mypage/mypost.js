import styled from 'styled-components';

const Mypost = styled.div`
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, .2) inset;
    padding-top: 40px;
    padding-bottom: 20px;

    h1 {
        text-align: center;
        font-size: 23px;
        font-weight: bold;
        height: 50px;
        line-height: 50px;
        margin-bottom: 30px;
    }

    .post {
        width: 700px;
        margin: auto;

        .nav {
            display: inline-block;
            text-align: center;
            background-color: #eee;
            width: 150px;
            line-height: 30px;
            height: 30px;
            margin-bottom: 10px;
            border-bottom: 2px solid #777;

            &:first-child {
                margin-left: 10px;
            }

            &.active {
                background-color: #ccc;
            }
            
            &:hover {
                background-color: #ccc;
            }
        }
    }
`

export default Mypost;
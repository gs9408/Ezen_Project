import styled from 'styled-components';

const MainContainer = styled.div`
    width: 980px;
    margin: auto;
    margin-bottom: 100px;
    margin-top: 20px;

    h2 {
        /* display: block; */
        text-align: center;
        color: #666;
        font-size: 20px;
        font-weight: bold;
        margin: 40px 0 20px;
    }
`

const EventProduct = styled.ul`
    list-style: none;
    display: flex;
    margin: auto;
    max-width: 980px;
    
    li {
        width: 33.3%;
        
        padding: 10px;
        box-sizing: border-box;

        &:first-child {
            padding-left: 0;
        }
        &:last-child {
            padding-right: 0;
        }

        & a {
            & img {
                width: 100%;
                margin-bottom: 50px;
            }
        }
    }
`;

const NewProduct = styled.ul`
    list-style: none;
    display: flex;
    margin: auto;
    max-width: 980px;

    li {
        width: 33.3%;
        
        padding: 10px;
        box-sizing: border-box;

        &:first-child {
            padding-left: 0;
        }
        &:last-child {
            padding-right: 0;
        }

        & a {
            text-decoration: none;
            
            & img {
                width: 100%;
            }
            & p {
                font-size: 14px;
                text-align: center;
                color: #999;
                transition: 0.3s;
                
            }
            & .title {
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
                margin-bottom: 60px;
            }
        }
    }
`;

const ReviewContainer = styled.ul`
    max-width: 980px;
    display: flex;
    margin: auto;
    li {
        
        width: 25%;
        padding: 10px;
        a {
            /* padding: 10px 0 10px 10px; */
            box-sizing: border-box;
            img {
                width: 100%;
            }
        }
    }
`;

export {MainContainer, EventProduct, NewProduct, ReviewContainer};
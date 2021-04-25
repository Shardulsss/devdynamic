import styled from 'styled-components';
import {Link} from 'react-scroll';

const ButtonMain = styled(Link)`
    border-radius: 30px;
    background: #005ce6;
    white-space: nowrap;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 20px 8px 20px;

    &:hover{
        background: #fff;
        transform: scale(1.1);
        transition: 0.2s;
        animation: ease-in-out;
    }

    @media screen and (max-width: 480px){
        font-size: 14px;
        padding: 5px 15px 5px 15px;
    }
`
export default ButtonMain;
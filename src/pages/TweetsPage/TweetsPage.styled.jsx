import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import { ReactComponent as ButtonIcon } from "../../icons/left-arrow.svg";

export const Wrapper = styled.div`
    padding: 15px 20px 30px 20px;
    background: #654ea3; 
    background: -webkit-linear-gradient(to left, #eaafc8, #654ea3);
    background: linear-gradient(to left, #eaafc8, #654ea3); 
    height: 100%;

    @media screen and (min-width: 768px) {
        padding: 20px 40px 46px 40px;
    }
    
    @media screen and (min-width: 1280px) {
        padding: 20px 60px 50px 60px;
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 2px 4px;
    width: 60px;
    height: 16px;
    background-color: #5CD3A8;
    border: 2px solid #5CD3A8;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
    border-radius: 10.3108px;
    font-weight: 500;
    font-size: 10px;
    text-transform: uppercase;
    color: #373737;
    cursor: pointer; 
    fill: #373737;

    &:hover  {
        color: #fff;
        fill: #fff; 
        background-color: #471CA9;  
        border: 2px solid #471CA9;
        box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #471CA9;
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 20px;
        padding: 5px 10px;
        width: 70px;
        height: 18px;
        font-size: 12px;
    }
    
    @media screen and (min-width: 1280px) {
        margin-bottom: 20px;
        padding: 7px 14px;
        width: 80px;
        height: 20px;
        font-size: 14px;
    }
`;

export const Icon = styled(ButtonIcon)`
    width: 10px;
    height: 10px;
    margin-right: 3px;

    @media screen and (min-width: 768px) {
        width: 13px;
        height: 13px;
        margin-right: 4px;
    }
    
    @media screen and (min-width: 1280px) {
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }
`;

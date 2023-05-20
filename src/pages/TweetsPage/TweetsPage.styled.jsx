import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import { ReactComponent as ButtonIcon } from "../../icons/left-arrow.svg";

export const Wrapper = styled.div`
    padding: 20px 70px 70px 70px;
    background-color: #EAE7FA;
`;

export const StyledLink = styled(Link)`
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 7px 14px;
    width: 80px;
    height: 20px;
    background-color: #5CD3A8;
    border: 2px solid #5CD3A8;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
    border-radius: 10.3108px;
    font-weight: 500;
    font-size: 14px;
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
`;

export const Icon = styled(ButtonIcon)`
    width: 15px;
    height: 15px;
    margin-right: 5px;
`;

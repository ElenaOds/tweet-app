import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';


export const Wrapper = styled.div`

    background: #654ea3; 
    background: -webkit-linear-gradient(to left, #eaafc8, #654ea3);
    background: linear-gradient(to left, #eaafc8, #654ea3); 
    height: 60px;
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 4px;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #B4F8C8;
`;
export const LogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
`;

export const HeaderInfo = styled.h2`
    color: #fff;
    font-weight: 600;
    font-size: 25px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;
`;

export const StyledLink = styled(NavLink)`
    position: relative;
    margin-right: 15px; 
    color: #fff;
    font-weight: 600;
    font-size: 25px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;

&.active {
    color: #4B2A99;
}
 &.active:after {
    position: absolute;
    display: block;
    content: '';
    bottom: -2;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
}
`;

export const Img = styled.img`
width: 40px;
height: 40px;

`;
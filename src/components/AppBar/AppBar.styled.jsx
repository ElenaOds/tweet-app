import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';


export const Wrapper = styled.div`
    height: 40px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 4px;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2px #AE7BE3;

    @media screen and (min-width: 768px) {
        height: 50px;
        padding: 0 40px;
    }

    @media screen and (min-width: 1280px) {
        height: 60px;
        padding: 0 60px;
    }
`;
export const LogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;

    @media screen and (min-width: 768px) {
        gap: 15px;
    }

    @media screen and (min-width: 1280px) {
        gap: 20px;
    }
`;

export const HeaderInfo = styled.h2`
     display: none;
    
    @media screen and (min-width: 380px) {
        display: block;
        color: #fff;
        font-weight: 600;
        font-size: 16px;
        line-height: 1.14;
        letter-spacing: 0.02em;
        text-decoration: none;
        }

    @media screen and (min-width: 768px) {
        font-size: 20px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 25px;
    }
`;

export const StyledLink = styled(NavLink)`
    position: relative;
    margin-right: 15px; 
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;

&.active {
    color: #4B2A99;
}
 &.active::after {
    color: #4B2A99;
    position: absolute;
    display: block;
    content: '';
    bottom: -2;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 2px;
    background-color: currentColor;
    
    @media screen and (min-width: 1280px) {
        height: 4px;
    }
}

@media screen and (min-width: 768px) {
    font-size: 20px;
}

@media screen and (min-width: 1280px) {
    font-size: 25px;
}
`;

export const Img = styled.img`
    width: 25px;
    height: 25px;

@media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
}

@media screen and (min-width: 1280px) {
    width: 40px;
    height: 40px;
}


`;
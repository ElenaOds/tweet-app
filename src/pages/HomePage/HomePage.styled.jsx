import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";
import social_bird from '../../images/social_bird.png';

export const Wrapper = styled.div`
    padding: 75px 20px 20px 20px;

    @media screen and (min-width: 768px) {
        background-image: url(${social_bird});
        background-repeat: no-repeat;
        height: 200px;
        width: auto;
        background-position: 90% 120%;
        padding: 100px 40px 40px 40px;
    }
    
    @media screen and (min-width: 1280px) {
        height: 300px;
        background-position: 90% 60%;
        padding: 150px 50px 50px 50px;
    }
`;



export const Title = styled.h1`
    color: #fff;
    font-weight: 700;
    font-size: 26px;
    line-height: 28px;
    letter-spacing: 0.02em;
    text-decoration: none;
    margin-bottom: 15px;

    @media screen and (min-width: 768px) {
        font-size: 30px;
        line-height: 32px;
        letter-spacing: 0.02em;
        text-decoration: none;
        margin-bottom: 20px;
    }
    
    @media screen and (min-width: 1280px) {
        font-size: 35px;
        line-height: 1.14;
        letter-spacing: 0.02em;
        text-decoration: none;
        margin-bottom: 20px;
    }
`;

export const Text = styled.p`
    color: #fff;
    font-weight: 400;   
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.02em;
    text-decoration: none;
    margin-bottom: 30px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 18px;
        letter-spacing: 0.02em;
        margin-bottom: 40px;
    }
    
    @media screen and (min-width: 1280px) {
        font-size: 18px;
        line-height: 20px;
        letter-spacing: 0.02em;
        margin-bottom: 50px;
    }
`;

export const StyledNavLink = styled(NavLink)`
   text-decoration: none;
   color: #fff;
   font-weight: 600;
   font-size: 16px;
   line-height: 18px;
   letter-spacing: 0.02em;
   width: 100px;
   height: 50px;
   border: 2px solid #fff;
   border-radius: 12px;
   padding: 4px 10px;
   outline: none;

    &:hover,
    &:focus {
        box-shadow: 0px 0px 2px 2px #fff;
    }

    @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 20px;
        width: 100px;
        height: 50px;
        padding: 6px 12px;
    }
    
    @media screen and (min-width: 1280px) {
        font-size: 20px;
        line-height: 22px;
        padding: 8px 12px;
    }
`;

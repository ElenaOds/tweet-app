import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    background: -webkit-linear-gradient(to left, #eaafc8, #654ea3);
    background: linear-gradient(to left, #eaafc8, #654ea3); 
    height: 100vh;
    padding: 150px 70px 70px 70px;
`;

export const Title = styled.h1`
    color: #fff;
    font-weight: 700;
    font-size: 35px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;
    margin-bottom: 20px;
`;

export const Text = styled.p`
   
    color: #fff;
    font-weight: 400;   
    font-size: 18px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    text-decoration: none;
    margin-bottom: 50px;
`;

export const Img = styled.img`
   width: auto;
   height: 300px;
`;

export const StyledNavLink = styled(NavLink)`
   text-decoration: none;
   color: #fff;
   font-weight: 600;
   font-size: 20px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    width: 100px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 12px;
    padding: 8px 12px;

    &:hover {
        border: 4px solid #fff;;
    }
`;

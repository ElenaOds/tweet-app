import styled from '@emotion/styled';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as Picture } from '../../icons/picture.svg';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 350px;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;

    @media screen and (min-width: 768px) {
        width: 330px;
        height: 420px;
    }
    
    @media screen and (min-width: 1280px) {
        width: 380px;
        height: 480px;
    }
 `;

export const StyledLogo = styled(Logo)`
    margin-top: 10px;
    margin-left: 10px;

    @media screen and (min-width: 768px) {
        margin-top: 20px;
        margin-left: 20px;
    }
    
    @media screen and (min-width: 1280px) {
        margin-top: 20px;
        margin-left: 20px;
    }
    
`;

export const BackgroundImage = styled(Picture)`
    width: 208px;
    height: 130px;
    margin-left: auto;
    margin-right: auto;
    
    @media screen and (min-width: 768px) {
        width: 260px;
        height: 144px;
    }
    
    @media screen and (min-width: 1280px) {
        width: 308px;
        height: 168px;
     
    }
`;

export const Rectangle = styled.div`
    width: 100%;
    height: 6px;
    margin-right: 0;
    margin-left: 0;
    margin-top: 12px;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;

    @media screen and (min-width: 768px) {
        height: 7px;
        margin-top: 16px;
    }
    
    @media screen and (min-width: 1280px) {
        height: 8px;
        margin-top: 18px;
    }
    `;

export const Ellipse = styled.div`
    width: 60px;
    height: 60px;
    border: 6px solid #EBD8FF;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
    border-radius: 50%;
    overflow: hidden;
    background: #EBD8FF;
    margin-top: -40px;
    margin-right: auto;
    margin-left: auto;  
    margin-bottom: 18px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
        border: 7px solid #EBD8FF;
        margin-top: -50px;
        margin-bottom: 20px;
    }
    
    @media screen and (min-width: 1280px) {
        width: 80px;
        height: 80px;
        border: 8px solid #EBD8FF;
        margin-top: -50px;
        margin-bottom: 26px;
    }

`;

export const Img = styled.img`
    object-fit: cover;
    width: 60px;
    height: 60px;

    @media screen and (min-width: 768px) {
        width: 70px;
        height: 70px;
    }
    
    @media screen and (min-width: 1280px) {
        width: 80px;
        height: 80px;
    }
`;

export const Text = styled.p`
    margin-right: auto;
    margin-left: auto; 
    margin-top: 0;
    margin-bottom: 12px;
    font-weight: 500;
    font-size: 16px;
    line-height: 14px;
    text-transform: uppercase;
    color: #EBD8FF;

    @media screen and (min-width: 768px) {
        margin-bottom: 14px;
        font-size: 18px;
        line-height: 16px;
    }
    
    @media screen and (min-width: 1280px) {
        margin-bottom: 16px;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
    }
`;

export const StyledButton = styled.button`
    margin-right: auto;
    margin-left: auto; 
    margin-top: 8px;
    text-align: center;
    width: 110px;
    height: 25px;
    background: ${props => (props.followed ? "#5CD3A8" : "#EBD8FF")};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #373737;
    cursor: pointer;

    &:hover {
        border: 2px solid transparent;
    }

    @media screen and (min-width: 768px) {
        margin-top: 10px;
        width: 160px;
        height: 40px;
        font-size: 16px;
        line-height: 18px;
    }
    
    @media screen and (min-width: 1280px) {
        margin-top: 10px;
        padding: 14px 28px;
        width: 196px;
        height: 50px;
        font-size: 18px;
        line-height: 22px;
    }
`;
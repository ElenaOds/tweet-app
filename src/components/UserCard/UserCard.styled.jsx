import styled from '@emotion/styled';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as Picture } from '../../icons/picture.svg';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    height: 460px;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;
 `;

export const StyledLogo = styled(Logo)`
    margin-top: 20px;
    margin-left: 20px;
    background: rgba(255, 255, 255, 0.3);
    
`;

export const BackgroundImage = styled(Picture)`
    width: 308px;
    height: 168px;
    margin-left: 36px;
    margin-right: 36px;
    margin-top: -14px; 
`;

export const Rectangle = styled.div`
    width: 100%;
    height: 8px;
    margin-right: 0;
    margin-left: 0;
    margin-top: 18px;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`;

export const Ellipse = styled.div`
    width: 80px;
    height: 80px;
    border: 8px solid #EBD8FF;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
    border-radius: 50%;
    overflow: hidden;
    background: #EBD8FF;
    margin-top: -50px;
    margin-right: auto;
    margin-left: auto;  
    margin-bottom: 26px;
`;

export const Img = styled.img`
    object-fit: cover;
    width: 80px;
    height: 80px;
`;

export const Text = styled.p`
    margin-right: auto;
    margin-left: auto; 
    margin-top: 0;
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #EBD8FF;
`;

export const StyledButton = styled.button`
    margin-right: auto;
    margin-left: auto; 
    margin-top: 10px;
    text-align: center;
    padding: 14px 28px;
    width: 196px;
    height: 50px;
    background: ${props => (props.followed ? "#5CD3A8" : "#EBD8FF")};
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #373737;
    cursor: pointer;

    &:hover {
        border: 2px solid transparent;
    }
`;


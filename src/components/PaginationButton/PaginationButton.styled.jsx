import styled from '@emotion/styled';

export const Button = styled.button`
    text-align: center;
    width: 110px;
    height: 30px;
    background-color: #5CD3A8;
    border: 2px solid #5CD3A8;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
    border-radius: 10.3108px;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #373737;
    cursor: pointer; 

    &:hover,
    &:focus {
        color: #fff;
        background-color: #471CA9;  
        border: 2px solid #471CA9;
        box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #471CA9;
        outline: none;
    }
    
    &:disabled {
        background-color:  rgba(239, 239, 239, 0.3);
        border: 2px solid rgba(118, 118, 118, 0.3);
        box-shadow: none;
        color: rgba(118, 118, 118, 0.3);
    }

    @media screen and (min-width: 768px) {
        width: 160px;
        height: 40px;
        font-size: 16px;
        line-height: 18px;
    }
    
    @media screen and (min-width: 1280px) {
        width: 196px;
        height: 50px;
        font-size: 18px;
        line-height: 22px;
    }

`;
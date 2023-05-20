import styled from '@emotion/styled';

export const Button = styled.button`
    margin-bottom: 80px;
    text-align: center;
    padding: 14px 28px;
    width: 196px;
    height: 50px;
    background-color: #5CD3A8;
    border: 2px solid #5CD3A8;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
    border-radius: 10.3108px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #373737;
    cursor: pointer; 

    &:hover  {
        color: #fff;
        background-color: #471CA9;  
        border: 2px solid #471CA9;
        box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #471CA9;
    }
    &:disabled {
        background-color:  rgba(239, 239, 239, 0.3);
        border: 2px solid rgba(118, 118, 118, 0.3);
        box-shadow: none;
        color: rgba(118, 118, 118, 0.3);
    }

`;
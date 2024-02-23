import styled from '@emotion/styled';

export const StyledSelect = styled.select`
    padding: 4px 4px;
    width: 140px;
    height: 25px;
    background-color: #5CD3A8;
    color: #373737;
    border: 2px solid #5CD3A8;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
    border-radius: 10.3108px;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 10px;
    text-transform: uppercase;
    outline: none;
  
  @media screen and (min-width: 768px) {
    padding: 5px 10px;
    width: 170px;
    height: 30px;
    font-size: 12px;
}

@media screen and (min-width: 1280px) {
    padding: 7px 14px;
    width: 200px;
    height: 40px;
    font-size: 14px;
}
    &:hover,
    &:focus {
      box-shadow: 0px 0px 2px 2px #fff;
}
`;

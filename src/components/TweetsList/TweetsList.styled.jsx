import styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;    
`;

export const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    column-gap: 15px;
    row-gap: 15px;
    justify-content: center;
    align-items: center;   

    @media screen and (min-width: 768px) {
        margin-bottom: 46px;
        column-gap: 20px;
        row-gap: 20px;
    }
    
    @media screen and (min-width: 1280px) {
        margin-bottom: 50px;
        column-gap: 20px;
        row-gap: 20px;
    }
`;

export const Text = styled.h3`
   color: #fff;
   font-size: 30px;   
`;

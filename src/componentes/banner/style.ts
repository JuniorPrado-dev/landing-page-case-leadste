/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

export const ContainerStyled=styled.div`
    display: flex;
    background-color:#F0F8FF;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 25vw;
`;

export const ImageTextStyled=styled.img`
    height: 65%;
    //para mobiles
    @media (max-width: 400px) {
        height: 95%;
    }
`;
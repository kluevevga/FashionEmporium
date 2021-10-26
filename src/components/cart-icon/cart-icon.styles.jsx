import styled from 'styled-components';


export const CartIconContainer = styled.div`
    min-width: 85px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: end;
    cursor: pointer;

    @media screen and (max-width: 640px) {
        min-width: 65px;
    }
`;

export const Icon = styled.div`
    margin-bottom: 8px;
    width: 40px;
`;

export const ItemsCount = styled.div`
    margin-right: 5px;
    font-size: 22px;
    color: #e11d48;

    @media screen and (max-width: 640px) {
        font-size: 14px;
    }
`;
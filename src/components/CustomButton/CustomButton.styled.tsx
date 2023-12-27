import styled from '@emotion/styled';

interface ButtonProps {
  isOpen?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  border-radius: 4px;
  border: 0.658px solid ${({isOpen}) =>  isOpen ? ('#ECF3FF') : ('#489F77')};
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonText = styled.p`
font-family: 'IBM Plex Sans', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 170.227%;
color: #37352F;
`
export const VariantsList = styled.ul`
  list-style: none;
  background-color: #ffffff;
  padding: 0;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 4px 30px rgba(4, 20, 32, 0.10);
  z-index: 100;
`;


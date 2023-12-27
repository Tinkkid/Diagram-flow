import styled from '@emotion/styled';
import checked from '../Icons/checkboxIcon.svg';


export const VariantItem = styled.li`
  min-height: 40px;
  border: 1px solid #eaf2ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
position: relative;
  display: flex;
    padding: 8px 12px;
  align-items: center;
  width: 100%;
  gap: 12px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 170.227%;
  color: #37352f;
`;

export const CheckBox = styled.input`
  appearance: none;
  margin: 0;
  width: 14px;
  height: 14px;
  border: 1px solid #95befc;
  border-radius: 2px;

  &:checked::after {
   position: absolute;
   top: 33%;
    left: 5%;
    display: block;
    width: 14px;
    height: 14px;
    background: #95befc;
    border-radius: 2px;
    content: '';
    background-image: url(${checked});
    background-repeat: no-repeat;
    background-position: cover;

    background-size: 14px, 14px;
  }
`;



export const TextLabel = styled.p`
width:100%;
`
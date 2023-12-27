import { FC } from 'react';
import { Button, VariantItem, VariantsList } from './CustomButton.styled';

interface CustomButtonProps {
  isOpen: boolean;
  handleToggle: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({ isOpen, handleToggle }) => {
  return (
    <>
      <Button onClick={handleToggle}>Варіант</Button>
      {isOpen && (
        <VariantsList>
          <VariantItem>Варіант 1</VariantItem>
          <VariantItem>Варіант 2</VariantItem>
        </VariantsList>
      )}
    </>
  );
};

export default CustomButton;

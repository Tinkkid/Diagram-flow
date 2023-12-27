import React from 'react'
import { Button } from './CustomButton.styled';

const CustomButton = ({ isOpen, handleToggle }) => {
  return (
    <>
      <Button onClick={handleToggle}>Варіант</Button>
      {isOpen && (
        <ul>
          <li>Варіант 1</li>
          <li>Варіант 2</li>
        </ul>
      )}
    </>
  );
};

export default CustomButton

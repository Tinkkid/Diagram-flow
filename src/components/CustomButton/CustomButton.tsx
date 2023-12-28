import React, { FC, useEffect, useState } from 'react';
import { useNodeId } from 'reactflow';
import { useSelector } from 'react-redux';

import { Button, VariantsList, ButtonText } from './CustomButton.styled';
import {
  selectSelectedVariants,
  selectVariants,
} from '../../redux/selectorsNodes';
import CustomCheckBox from '../CustomCheckBox/CustomCheckBox';
import { ArrowDown } from '../Icons/ArrowDown';
import { ArrowUp } from '../Icons/ArrowUp';


interface CustomButtonProps {
  isOpen: boolean;
  handleToggle: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Variant {
  nodeId: string;
  value: number;
}

const CustomButton: FC<CustomButtonProps> = ({ isOpen, setIsOpen }) => {
  const nodeId = useNodeId();
  const [textBtn, setTextBtn] = useState<string>('Вибрати значення');
  const selectedVariants = useSelector(selectSelectedVariants);
  const variants: number[] = useSelector(selectVariants)[Number(nodeId) - 1];
  const valueSelectedVariants = '';
  const textSelectedVariant = 'Вибрати значення'

  useEffect(() => {
    const lastNodeIndex = selectedVariants.findIndex(
      (node: Variant) => node.nodeId === nodeId
    );
    const lastVariant = selectedVariants.slice(0, lastNodeIndex + 1);
    const valueSelectedVariants = lastVariant
      .map((item: Variant) => item.value)
      .join('-');

    if (selectedVariants.length === 0) {
      setTextBtn('Вибрати значення');
    } else {
      setTextBtn(valueSelectedVariants ? `Варіант ${valueSelectedVariants}` : 'Вибрати значення');
    }
  }, [selectedVariants, nodeId]);

  useEffect(() => {
    if (valueSelectedVariants) {
      setTextBtn(
        textSelectedVariant === 'Вибрати значення'
          ? textSelectedVariant
          : `Варіант ${valueSelectedVariants}`
      );
    }
  }, [valueSelectedVariants, textSelectedVariant]);

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <ButtonText>{textBtn}</ButtonText>
        {!isOpen ? <ArrowDown /> : <ArrowUp />}
      </Button>
      {isOpen && (
        <VariantsList>
          {variants &&
            variants.map((item: number) => {
              return (
                <CustomCheckBox
                  key={item}
                  value={item}
                  setIsOpen={setIsOpen}
                  nodeId={nodeId}
                />
              );
            })}
        </VariantsList>
      )}
    </>
  );
};

export default CustomButton;

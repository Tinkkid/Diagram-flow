import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewNode, removeNode } from '../../redux/sliceNodes';
import {
  CheckBox,
  VariantItem,
  Label,
  TextLabel,
} from './CustomCheckBox.styled';
import { selectSelectedVariants } from '../../redux/selectorsNodes';

interface CustomCheckBoxProps {
  value: number | string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  nodeId: string | null;
}

const CustomCheckBox: FC<CustomCheckBoxProps> = ({
  value,
  setIsOpen,
  nodeId,
}) => {
  const dispatch = useDispatch();
  const selectedVariants = useSelector(selectSelectedVariants);
  const isChecked = selectedVariants.some(
    (    variant: { nodeId: string | null; value: number; }) => variant.nodeId === nodeId && variant.value === Number(value)
  );

  useEffect(() => {
    if (nodeId) {
      if (isChecked) {
        localStorage.setItem(`${nodeId}-${value}`, 'checked');
      } else {
        localStorage.removeItem(`${nodeId}-${value}`);
      }
    }
  }, [isChecked, nodeId, value]);

  const handleChange = () => {
    if (setIsOpen && nodeId) {
      setIsOpen(prev => !prev);
      localStorage.setItem(`${nodeId}-isOpen`, JSON.stringify(!setIsOpen));
    }

    if (isChecked && nodeId) {
      dispatch(removeNode(nodeId));
    } else if(nodeId) {
      dispatch(getNewNode({ nodeId, value: Number(value) }));
    }
  };

  const labelText =
    value === 'Вибрати значення' ? (value as string) : `Варіант ${value}`;

  return (
    <VariantItem>
      <Label>
        <CheckBox
          type="checkbox"
          value={value}
          onChange={handleChange}
          checked={isChecked}
        />
        <TextLabel>{labelText}</TextLabel>
      </Label>
    </VariantItem>
  );
};

export default CustomCheckBox;

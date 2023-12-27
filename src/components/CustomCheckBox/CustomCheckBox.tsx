import { FC } from 'react';

import { useDispatch } from 'react-redux';
import { getNewNode } from '../../redux/sliceNodes';
import {
  CheckBox,
  VariantItem,
  Label,
  TextLabel,
} from './CustomCheckBox.styled';

interface CustomCheckBoxProps {
  value: number | string;
  textSelectedVariant: string;
  setTextSelectedVariant: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  nodeId: string | null;
}

const CustomCheckBox: FC<CustomCheckBoxProps> = ({
  value,
  textSelectedVariant,
  setTextSelectedVariant,
  setIsOpen,
  nodeId,
}) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    if (nodeId) {
      setIsOpen(false);
      setTextSelectedVariant(value.toString());
      dispatch(getNewNode({ nodeId, value: Number(value) }));
    }
  };

  const labelText =
    value === 'Вибрати значення' ? (value as string) : `Варіант ${value}`;

  return (
    <VariantItem>
      <Label >
        <CheckBox
         
          type="checkbox"
          value={value}
          onChange={handleChange}
          checked={value.toString() === textSelectedVariant}
        />
        <TextLabel>{labelText}</TextLabel>
      </Label>
    </VariantItem>
  );
};

export default CustomCheckBox;

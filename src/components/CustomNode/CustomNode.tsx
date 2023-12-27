import { useState } from 'react'
import { Handle, Position, useNodeId } from 'reactflow';
import { useSelector } from 'react-redux';
import { selectNodes } from '../../redux/selectorsNodes';

import { RectangleInsideNode, WrapperCustomNode } from './CustomNode.styled';
import CustomButton from '../CustomButton/CustomButton';


export const CustomNode = () => {
  const nodeId = useNodeId();
  const [isOpen, setIsOpen] = useState(false)
  const nodes = useSelector(selectNodes);
  const firstNode = nodes[0].id === nodeId;

   const handleToggle = () => {
      setIsOpen(!isOpen)
   }
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{ backgroundColor: 'transparent', width: '1px', border: 'none' }}
      />
      <WrapperCustomNode>
        <RectangleInsideNode></RectangleInsideNode>
        <CustomButton
          handleToggle={handleToggle}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </WrapperCustomNode>
      <Handle
        type="source"
        position={firstNode ? Position.Bottom : Position.Right}
        style={{ backgroundColor: firstNode ? 'transparent' : '#ADB5BD' }}
      />
    </>
  );
}


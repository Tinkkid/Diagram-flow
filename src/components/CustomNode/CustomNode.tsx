import { useState } from 'react';
import { Handle, Position, useNodeId } from 'reactflow';
import { useSelector } from 'react-redux';
import { selectNodes } from '../../redux/selectorsNodes';

import { RectangleInsideNode, WrapperCustomNode } from './CustomNode.styled';
import CustomButton from '../CustomButton/CustomButton';

export const CustomNode = () => {
  const nodeId = useNodeId();
  const [isOpen, setIsOpen] = useState(false);
  const nodes = useSelector(selectNodes);
  const firstNode = nodes[0].id === nodeId;
  const nextNode = nodes[nodes.length - 1].id === nodeId;
  const stylingFirstNode = {
    backgroundColor: 'transparent',
    width: '1px',
    border: 'none',
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handlePosition = firstNode ? Position.Bottom : Position.Right;
  const handleStyle = nextNode
    ? {
        backgroundColor: 'transparent',
        width: '1px',
        border: 'none',
      }
    : {
        backgroundColor: '#ADB5BD',
        width: '1px',
        border: 'none',
      };
  const sourceStyle =
    handlePosition === Position.Right && !firstNode
      ? {
          top: 110,
          ...handleStyle,
        }
      : {
          top: '100%',
          ...handleStyle,
        };

  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={firstNode ? stylingFirstNode : handleStyle}
      />
      <WrapperCustomNode>
        <RectangleInsideNode></RectangleInsideNode>
        <CustomButton
          handleToggle={handleToggle}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </WrapperCustomNode>
      <Handle type="source" position={handlePosition} style={sourceStyle} />
    </>
  );
};

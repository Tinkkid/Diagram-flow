import { useState } from 'react'
import { Handle, Position } from 'reactflow';
import { RectangleInsideNode, WrapperCustomNode } from './CustomNode.styled';
import CustomButton from '../CustomButton/CustomButton';


const CustomNode = () => {
   const [isOpen, setIsOpen] = useState(false)

   const handleToggle = () => {
      setIsOpen(!isOpen)
   }
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <WrapperCustomNode>
        <RectangleInsideNode></RectangleInsideNode>
           <CustomButton handleToggle={handleToggle} isOpen={isOpen} />
      </WrapperCustomNode>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}

export default CustomNode

import React, { useState } from 'react'
import { Handle, Position } from 'reactflow';


const CustomNode = () => {
   const [isOpen, setIsOpen] = useState(false)

   const handleToggle = () => {
      setIsOpen(!isOpen)
   }
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <div></div>
        <button onClick={handleToggle}>Варіант</button>
           {isOpen && <ul>
              <li>Варіант 1</li>
              <li>Варіант 2</li>
           </ul>}
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}

export default CustomNode

import './App.css'
import ReactFlow, { Controls, Background, NodeTypes } from 'reactflow';
import 'reactflow/dist/style.css';
import './index.css'; 

import { CustomNode } from './components/CustomNode/CustomNode.jsx'
import { useSelector } from 'react-redux';
import { selectEdges, selectNodes } from './redux/selectorsNodes.js';
import { useMemo } from 'react';

function App() {

 const nodes = useSelector(selectNodes);
 const edges = useSelector(selectEdges);
 const nodeTypes: NodeTypes = useMemo(() => ({ CustomNode }), []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
        <Controls />
        <Background color="#F9FAFF" />
     </ReactFlow>
    </div>
  )
}

export default App

import './App.css'
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './components/CustomNode/CustomNode.jsx';

function App() {

  const initialNodes = [
  { id: '1', type: 'customNode', position: { x: 0, y: 0 }, data: { label: 'Варіант' } },
];

const nodeTypes = { customNode: CustomNode };


  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} nodeTypes={nodeTypes}>
        <Controls />
        <Background color="#F9FAFF" />
     </ReactFlow>
    </div>
  )
}

export default App

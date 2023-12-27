import './App.css'
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

function App() {
  

  return (
    <div>
      <ReactFlow>
        <Controls />
        <Background color="#F9FAFF" />
     </ReactFlow>
    </div>
  )
}

export default App

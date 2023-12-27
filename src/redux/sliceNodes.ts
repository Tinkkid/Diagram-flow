import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MarkerType } from 'reactflow';

interface Position {
  x: number;
  y: number;
}

interface Node {
  id: string;
  type: string;
  position: Position;
  zIndex: number;
}

interface Edge {
  id: string;
  source: string;
  target: string;
  type: string;
  markerEnd: { type: MarkerType.Arrow };
}

interface Variant {
  nodeId: string;
  value: number;
}

interface NodeState {
  nodes: Node[];
  edges: Edge[];
  selectedVariants: Variant[];
  variants: number[][];
}

const initialNodes: Node[] = [
  { id: '1', type: 'CustomNode', position: { x: 50, y: 50 }, zIndex: 1000 },
];

const initialState: NodeState = {
  nodes: initialNodes,
  edges: [],
  selectedVariants: [],
  variants: [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
  ],
};

export const nodeSlice = createSlice({
  name: 'node',
  initialState,
  reducers: {
    getNewNode(
      state,
      action: PayloadAction<{ nodeId: string; value: number }>
    ) {
      const { nodeId, value } = action.payload;
      const nextNodeId = `${Number(nodeId) + 1}`;
      const nextNodeIndex = state.nodes.findIndex(
        node => node.id === nextNodeId
      );

      if (nextNodeIndex === -1) {
        const lastNode = state.nodes[state.nodes.length - 1];
        const x = lastNode.position.x + 150;
        const y = lastNode.position.y + 200;

        const newNode: Node = {
          id: nextNodeId,
          type: 'CustomNode',
          position: { x, y },
          zIndex: 1000 - Number(nodeId),
        };

        state.nodes.push(newNode);

        const newEdge: Edge = {
          id: `${nodeId}-${nextNodeId}`,
          source: nodeId,
          target: nextNodeId,
          type: 'smoothstep',
          markerEnd: { type: MarkerType.Arrow },
        };

        state.edges.push(newEdge);
        state.selectedVariants.push({ nodeId, value });
        return;
      }

      state.selectedVariants[nextNodeIndex - 1].value = value;
    },
  },
});

export const { getNewNode } = nodeSlice.actions;

export const nodeReducer = nodeSlice.reducer;

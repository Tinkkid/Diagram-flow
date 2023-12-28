import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MarkerType } from 'reactflow';
import { Node, Edge, NodeState } from './types';

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
      { payload: { nodeId, value } }: PayloadAction<{ nodeId: string; value: number }>
    ) {
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
    removeNode(state, action: PayloadAction<string>) {
      const removedNodeIndex = state.nodes.findIndex(
        node => node.id === action.payload
      );
        state.edges = state.edges.slice(0, removedNodeIndex);
        state.nodes = state.nodes.slice(0, removedNodeIndex + 1);
        state.selectedVariants = state.selectedVariants.slice(0, removedNodeIndex);
    },
  },
});

export const { getNewNode, removeNode } = nodeSlice.actions;

export const nodeReducer = nodeSlice.reducer;

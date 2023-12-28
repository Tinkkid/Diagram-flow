import { MarkerType } from 'reactflow';

export interface Position {
  x: number;
  y: number;
}

export interface Node {
  id: string;
  type: string;
  position: Position;
  zIndex: number;
}

export interface Edge {
  id: string;
  source: string;
  target: string;
  type: string;
  markerEnd: { type: MarkerType.Arrow };
}

export interface Variant {
  nodeId: string;
  value: number;
}

export interface NodeState {
  nodes: Node[];
  edges: Edge[];
  selectedVariants: Variant[];
  variants: number[][];
}

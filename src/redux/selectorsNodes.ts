import { RootState } from './store';

export const selectNodes = (state : RootState)  => state.node.nodes;
export const selectEdges = (state : RootState)  => state.node.edges;
export const selectSelectedVariants = (state : RootState)  => state.node.selectedVariants;
export const selectVariants = (state : RootState)  => state.node.variants;

import { createSlice } from "@reduxjs/toolkit";

const graphSlice = createSlice({
  name: "graph",
  initialState: {
    node: [],
    graph: {},
    selectedNode: 0,
    DFSPath: [],
    BFSPath: [],
  },
  reducers: {
    addNode: (state, action) => {
      const { graph, node, selectedNode } = state;
      const { name } = action.payload;
      state.node.push(name);

      if (name !== node[selectedNode]) {
        graph[node[selectedNode]] = {
          ...graph[node[selectedNode]],
          [node.length - 1]: name,
        };
      }
    },
    resetGraph: (state, action) => {
      state.node = [];
      state.graph = {};
      state.selectedNode = 0;
      state.DFSPath = [];
      state.BFSPath = [];
    },
    removeNode: (state, action) => {},
    changeHighlightedNode: (state, action) => {
      state.selectedNode = action.payload.index;
    },
    showDFS: (state, action) => {
      state.DFSPath = action.payload.DFSPath;
    },
    showBFS: (state, action) => {
      state.BFSPath = action.payload.BFSPath;
    },
  },
});

export const {
  addNode,
  removeNode,
  showDFS,
  showBFS,
  changeHighlightedNode,
  resetGraph,
} = graphSlice.actions;

export const selectNode = (state) => state.graph.node;
export const selectGraph = (state) => state.graph.graph;
export const selectHighlightedNode = (state) => state.graph.selectedNode;
export const selectBFSPath = (state) => state.graph.BFSPath;
export const selectDFSPath = (state) => state.graph.DFSPath;

export default graphSlice.reducer;

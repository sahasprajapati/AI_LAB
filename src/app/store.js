import { configureStore } from "@reduxjs/toolkit";
import graphReducer from "../features/graph/graphSlice";
export default configureStore({
  reducer: {
    graph: graphReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import graphReducer from "../features/graph/graphSlice";
import chatbotReducer from "../features/chatbot/chatbotSlice";
import waterjugReducer from "../features/waterjug/waterjugSlice";
import aStarSearchReducer from "../features/aStarSearch/aStarSearchSlice";
export default configureStore({
  reducer: {
    graph: graphReducer,
    waterjug: waterjugReducer,
    chatbot: chatbotReducer,
    aStarSearch: aStarSearchReducer,
  },
});

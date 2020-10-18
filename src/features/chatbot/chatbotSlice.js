const { createSlice } = require("@reduxjs/toolkit");

const chatbotSlice = createSlice({
  name: "chatbot",
  initialState: {
    question: "",
    answer: "",
    messageHistory: [],
  },
  reducers: {
    addQuestion: (state, action) => {
      state.question = action.payload.question;
      state.messageHistory.push(action.payload.question);
    },
    addAnswer: (state, action) => {
      state.answer = action.payload.answer;
      state.messageHistory.push(action.payload.answer);
    },
    reset: (state, action) => {
      state.messageHistory = [];
      state.answer = "";
      state.question = "";
    },
  },
});

export const { addQuestion, addAnswer, reset } = chatbotSlice.actions;

export const selectAnswer = (state) => state.chatbot.answer;
export const selectQuestion = (state) => state.chatbot.question;
export const selectMessageHistory = (state) => state.chatbot.messageHistory;

export default chatbotSlice.reducer;

import WaterJugClass from "./WaterjugClass";

const { createSlice } = require("@reduxjs/toolkit");
const waterjug = new WaterJugClass();
const waterjugSlice = createSlice({
  name: "waterjug",
  initialState: {
    capacityX: 3,
    capacityY: 5,
    target: 4,
    path: [],
  },
  reducers: {
    addCapacityX: (state, action) => {
      state.capacityX = action.payload.capacityX;
      waterjug.capX = state.capacityX;
    },
    addCapacityY: (state, action) => {
      state.capacityY = action.payload.capacityY;
      waterjug.capY = state.capacityY;
    },
    addTarget: (state, action) => {
      state.target = action.payload.target;
    },
    computePath: (state, action) => {
      waterjug.pour();
      console.log(waterjug.path);
      state.path = [...waterjug.path];
    },
    reset: (state, action) => {
      state.path = [];
    },
  },
});

export const {
  addCapacityX,
  addCapacityY,
  computePath,
  addTarget,
  reset,
} = waterjugSlice.actions;

export const selectCapacityX = (state) => state.waterjug.capacityX;
export const selectCapacityY = (state) => state.waterjug.capacityY;
export const selectPath = (state) => state.waterjug.path;
export const selectTarget = (state) => state.waterjug.target;

export default waterjugSlice.reducer;

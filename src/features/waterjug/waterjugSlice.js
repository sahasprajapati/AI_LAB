import WaterJugClass from "./WaterjugClass";

const { createSlice } = require("@reduxjs/toolkit");
const waterjug = new WaterJugClass(3, 5, 4);
const waterjugSlice = createSlice({
  name: "waterjug",
  initialState: {
    capacityX: 3,
    capacityY: 5,
    target: 4,
    path: [],
    stopAnimation: false,
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
      waterjug.target = state.target;
    },
    computePath: (state, action) => {
      waterjug.pour();
      console.log(waterjug.path);
      state.path = [...waterjug.path];

      state.stopAnimation = false;
    },
    reset: (state, action) => {
      state.path = [];
      state.stopAnimation = true;
    },
    setStop: (state, action) => {
      state.stopAnimation = action.payload.stopAnimation;
    },
  },
});

export const {
  addCapacityX,
  addCapacityY,
  computePath,
  addTarget,
  reset,
  setStop,
} = waterjugSlice.actions;

export const selectCapacityX = (state) => state.waterjug.capacityX;
export const selectCapacityY = (state) => state.waterjug.capacityY;
export const selectPath = (state) => state.waterjug.path;
export const selectTarget = (state) => state.waterjug.target;
export const selectStopAnimation = (state) => state.waterjug.stopAnimation;
export default waterjugSlice.reducer;

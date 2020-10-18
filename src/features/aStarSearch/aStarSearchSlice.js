import _ from "lodash";
import { computePath } from "./aStarSearchAlgorithm";
import { GRID_SIZE, Mode } from "./constants";
import { A_STAR, BLANK, LABYRINTH, RANDOM } from "./presets";

const { createSlice } = require("@reduxjs/toolkit");

const _initialState = (width, height) => {
  return {
    grid: A_STAR,
    mode: Mode.draw,
    start: { x: 2, y: 2 },
    end: { x: width - 3, y: height - 3 },
    preset: "a-star-text",
  };
};
const _changeCellStatus = (state, { x, y }, status) => {
  const newState = _.cloneDeep(state);
  newState.path = undefined;

  if (status === "blocked" && newState.grid[x][y].status === "blocked") {
    newState.grid[x][y] = { status: "empty" };
  } else {
    newState.grid[x][y] = { status: status };
  }
  return newState;
};
const _changePreset = (state, preset) => {
  if (!preset) return state;

  console.log(preset);
  const base = _initialState(GRID_SIZE, GRID_SIZE);
  switch (preset) {
    case "a-star-text":
      return A_STAR;
    case "labyrith":
      return LABYRINTH;
    case "blank":
      return BLANK;
    case "random":
      return RANDOM();
    default:
      return RANDOM();
  }
};
const aStarSearchSlice = createSlice({
  name: "aStarSearch",
  initialState: _initialState(GRID_SIZE, GRID_SIZE),
  reducers: {
    setCellAsBlocked: (state, action) => {
      const { x, y } = action.payload;

      state.grid[x][y].status = "blocked";
    },
    setMode: (state, action) => {
      state.mode = action.payload.mode;
    },
    setStart: (state, action) => {
      state.start.x = action.payload.x;
      state.start.y = action.payload.y;
      state.mode = Mode.draw;
      state.path = undefined;
    },
    setEnd: (state, action) => {
      state.end.x = action.payload.x;
      state.end.y = action.payload.y;
      state.mode = Mode.draw;
      state.path = undefined;
    },
    calculatePath: (state, action) => {
      state.path = computePath(state.grid, state.start, state.end);
    },
    clearGrid: (state, action) => {
      state.path = undefined;
      state.grid = _changePreset(state, state.preset);
    },
    changePreset: (state, action) => {
      state.path = undefined;
      state.grid = _changePreset(state, action.payload.preset);
      state.preset = action.payload.preset;
    },
  },
});

export const {
  setCellAsBlocked,
  setMode,
  setStart,
  setEnd,
  calculatePath,
  clearGrid,
  changePreset,
} = aStarSearchSlice.actions;

export const selectGrid = (state) => state.aStarSearch.grid;
export const selectMode = (state) => state.aStarSearch.mode;
export const selectStart = (state) => state.aStarSearch.start;
export const selectEnd = (state) => state.aStarSearch.end;
export const selectPreset = (state) => state.aStarSearch.preset;
export const selectPath = (state) => state.aStarSearch.path;

export default aStarSearchSlice.reducer;

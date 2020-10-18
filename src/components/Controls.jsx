import React from "react";

import SettingsModal from "./SettingsModal";

import { Button, Grid } from "@material-ui/core";
import {
  ClearAllOutlined,
  PlayArrowOutlined,
  StopOutlined,
} from "@material-ui/icons";
import {
  calculatePath,
  clearGrid,
  selectMode,
  setMode,
} from "../features/aStarSearch/aStarSearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { Mode } from "../features/aStarSearch/constants";

const Controls = () => {
  const mode = useSelector(selectMode);
  const dispatch = useDispatch();

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          startIcon={<StopOutlined />}
          disabled={mode === Mode.setStart}
          onClick={() =>
            dispatch(
              setMode({
                mode: mode === Mode.setStart ? Mode.draw : Mode.setStart,
              })
            )
          }
          style={{ outline: 0 }}
        >
          SET START
        </Button>
      </Grid>
      <Grid item>
        <Button
          color="primary"
          variant="contained"
          startIcon={<StopOutlined />}
          disabled={mode === Mode.setEnd}
          onClick={() =>
            dispatch(
              setMode({ mode: mode === Mode.setEnd ? Mode.draw : Mode.setEnd })
            )
          }
          style={{ outline: 0 }}
        >
          SET END
        </Button>
      </Grid>

      <Grid item>
        <Button
          color="primary"
          variant="contained"
          startIcon={<StopOutlined />}
          disabled={mode === Mode.draw}
          onClick={() => dispatch(setMode({ mode: Mode.draw }))}
          style={{ outline: 0 }}
        >
          DRAW
        </Button>
      </Grid>
      <Grid item>
        <Button
          color="primary"
          variant="contained"
          startIcon={<PlayArrowOutlined />}
          onClick={() => dispatch(calculatePath())}
          style={{ outline: 0 }}
        >
          START
        </Button>
      </Grid>
      <Grid item>
        <Button
          color="primary"
          variant="contained"
          startIcon={<ClearAllOutlined />}
          onClick={() => dispatch(clearGrid())}
          style={{ outline: 0 }}
        >
          RESET
        </Button>
      </Grid>

      <Grid item>
        <SettingsModal />
      </Grid>
    </Grid>
  );
};

export default Controls;

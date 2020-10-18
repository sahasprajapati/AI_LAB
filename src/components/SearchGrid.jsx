import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectEnd,
  selectGrid,
  selectMode,
  selectPath,
  selectStart,
  setCellAsBlocked,
  setEnd,
  setStart,
} from "../features/aStarSearch/aStarSearchSlice";
import { Mode } from "../features/aStarSearch/constants";
import GridCell from "./GridCell";
import styles from "./Grid.module.css";
const SearchGrid = (props) => {
  const grid = useSelector(selectGrid);
  const end = useSelector(selectEnd);
  const path = useSelector(selectPath);
  const start = useSelector(selectStart);
  const mode = useSelector(selectMode);

  const dispatch = useDispatch();

  const [isPressed, setIsPressed] = useState(false);
  const onMouseDown = () => setIsPressed(true);
  const onMouseUp = () => setIsPressed(false);

  useEffect(() => {
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseUp", onMouseUp);
    };
  }, []);

  const onCellClick = (rowIndex, colIndex) => () => {
    console.log(rowIndex, colIndex);
    if (mode === Mode.draw) {
      dispatch(setCellAsBlocked({ x: rowIndex, y: colIndex }));
    } else if (mode === Mode.setStart) {
      dispatch(setStart({ x: rowIndex, y: colIndex }));
    } else if (mode === Mode.setEnd) {
      dispatch(setEnd({ x: rowIndex, y: colIndex }));
    }
  };

  return (
    <div className={styles.gridRoot}>
      <table className={styles.gridTable}>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex} style={{ border: "1px solid black" }}>
              {row.map((cell, colIndex) => (
                <GridCell
                  {...{
                    key: `${rowIndex} - ${colIndex}`,
                    cell,
                    rowIndex,
                    colIndex,
                    start,
                    end,
                    path,
                    isPressed,
                    onCellClick: onCellClick,
                  }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchGrid;

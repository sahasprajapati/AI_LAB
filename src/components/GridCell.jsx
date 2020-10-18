import { Tooltip } from "@material-ui/core";

import React from "react";
import TooltipContent from "./TooltipContent";

import cn from "classnames";
import styles from "./Grid.module.css";

const GridCell = (props) => {
  const { cell, rowIndex, colIndex, start, end, path, onCellClick } = props;
  const isClosed = path && path[rowIndex][colIndex]?.isClosed;
  const isPath = path && path[rowIndex][colIndex]?.isPath;
  const isChecked = path && path[rowIndex][colIndex]?.fCost !== 0;
  const animationOffset = path ? path[rowIndex][colIndex]?.counter : 0;

  return (
    <>
      <td
        className={cn(
          styles.gridCell,
          styles[cell.status],
          { [styles.start]: rowIndex === start.x && colIndex === start.y },
          { [styles.end]: rowIndex === end.x && colIndex === end.y },
          { [styles.closed]: isClosed },
          { [styles.checked]: isChecked },
          { [styles.path]: isPath }
        )}
        key={`${rowIndex}-${colIndex}`}
        onClick={onCellClick(rowIndex, colIndex)}
        style={{
          animationDelay: animationOffset
            ? `${animationOffset * 10}ms`
            : undefined,
        }}
      >
        {path && (isClosed || isChecked || isPath) ? (
          <Tooltip title={<TooltipContent cell={path[rowIndex][colIndex]} />}>
            <div
              className={styles.gridTooltip}
              style={{ color: "transparent" }}
            />
          </Tooltip>
        ) : null}
      </td>
    </>
  );
};
export default React.memo(GridCell);

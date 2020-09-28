import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeHighlightedNode,
  selectHighlightedNode,
} from "../features/graph/graphSlice";

const GraphNode = (props) => {
  const { name, index, x_position, y_position } = props;
  const dispatch = useDispatch();
  const highlightedNode = useSelector(selectHighlightedNode);
  let strokeColor = "black";
  if (highlightedNode === index) strokeColor = "green";
  return (
    <>
      <svg
        x={x_position}
        y={y_position}
        onClick={() => dispatch(changeHighlightedNode({ index: index }))}
      >
        <circle
          cx="30"
          cy="30"
          r="20"
          stroke={strokeColor}
          strokeWidth="3"
          fill="red"
          fillOpacity="0.5"
        />
        <text textAnchor="middle" x="30" y="30">
          {name}
        </text>
      </svg>
    </>
  );
};
export default GraphNode;

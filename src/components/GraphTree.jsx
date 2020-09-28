import React from "react";
import GraphNode from "./GraphNode";
import { useSelector } from "react-redux";
import { selectGraph } from "../features/graph/graphSlice";

const GraphTree = (props) => {
  const {
    parentName,
    parentIndex,
    x_position = 0,
    y_position = 0,
    height,
    width,
  } = props;
  const graph = useSelector(selectGraph);
  let renderChildrenList = false;

  const countChildren = (object) => {
    // console.log("Children", object);
    if (typeof object === "undefined") return 0;
    let count = 0;
    for (let key of Object.keys(object)) {
      count++;
      count += countChildren(graph[object[key]]);
    }
    return count;
  };

  const childObject = graph[parentName];

  let len = 0;
  let childList = [];
  len = countChildren(childObject);

  if (typeof childObject !== "undefined") {
    renderChildrenList = true;

    for (let key of Object.keys(childObject)) {
      childList.push([key, childObject[key]]);
    }
  }

  // console.log("Maximum children " + parentName, len);

  let varSpacing = -len * 25;
  return (
    <svg
      x_position={x_position}
      y_position={y_position}
      width={width}
      height={height}
    >
      <GraphNode
        x_position={parentIndex === 0 ? width / 2 : x_position}
        y_position={y_position}
        name={parentName}
        index={parentIndex}
      />

      {renderChildrenList
        ? childList.map((name, index) => {
            varSpacing += len * 25;
            return typeof graph[name[1]] !== "undefined" ? (
              <GraphTree
                x_position={x_position + varSpacing}
                y_position={y_position + 100}
                width={width}
                height={height}
                key={index}
                parentName={name[1]}
                parentIndex={name[0]}
              />
            ) : (
              <GraphTree
                x_position={x_position + varSpacing}
                y_position={y_position + 100}
                key={index}
                parentName={name[1]}
                parentIndex={name[0]}
              />
            );
          })
        : null}
    </svg>
  );
};
export default GraphTree;

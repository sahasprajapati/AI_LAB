import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addNode,
  showDFS,
  showBFS,
  selectNode,
  selectHighlightedNode,
  selectBFSPath,
  selectDFSPath,
  resetGraph,
} from "./graphSlice";

import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
  TextField,
} from "@material-ui/core";
import Graph from "./GraphClass";
import GraphTree from "../../components/GraphTree";

let g = new Graph();

const GraphComponent = () => {
  const nodeList = useSelector(selectNode);
  const highlightedNode = useSelector(selectHighlightedNode);

  const bfs = useSelector(selectBFSPath);
  const dfs = useSelector(selectDFSPath);
  const dispatch = useDispatch();
  const [nodeName, setNodeName] = useState("");

  const handleNewNodeSubmit = () => {
    setNodeName("");
    if (nodeList.includes(nodeName)) return;
    dispatch(addNode({ name: nodeName || "Node" }));
    if (typeof nodeList[highlightedNode] !== "undefined")
      g.addEdge(nodeList[highlightedNode], nodeName);
  };

  const handleShowDFS = () => {
    const dfs = g.DFS(nodeList[highlightedNode], true);
    dispatch(showDFS({ DFSPath: dfs }));
  };

  const handleShowBFS = () => {
    const bfs = g.BFS(nodeList[highlightedNode]);
    dispatch(showBFS({ BFSPath: bfs }));
  };

  return (
    <Grid direction="column" container spacing={2}>
      <Grid item>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item>
                <Typography variant="h5">Breadth First Search:</Typography>
                <Typography>
                  {bfs.length !== 0
                    ? bfs.map((data) => {
                        if (data === bfs[bfs.length - 1]) return data;
                        else return data + "->";
                      })
                    : "(BFS Path)"}
                </Typography>
                <Typography variant="h5">Depth First Search:</Typography>
                <Typography>
                  {dfs.length !== 0
                    ? dfs.map((data) => {
                        if (data === dfs[dfs.length - 1]) return data;
                        else return data + "->";
                      })
                    : "(DFS Path)"}
                </Typography>
                <Typography>Enter node name to draw tree graph.</Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <TextField
              label="Node Name"
              placeholder="Node"
              variant="outlined"
              aria-label="Node name"
              value={nodeName}
              onChange={(e) => setNodeName(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleNewNodeSubmit();
              }}
            />
            <Button variant="outlined" onClick={handleNewNodeSubmit}>
              Add node
            </Button>
            <Button variant="outlined" onClick={handleShowDFS}>
              Show DFS
            </Button>
            <Button variant="outlined" onClick={handleShowBFS}>
              Show BFS
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                g = new Graph();
                dispatch(resetGraph());
              }}
            >
              Reset Tree Graph
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item>
        <Card>
          <CardContent>
            <Typography variant="h4" align="center">
              Tree Graph
            </Typography>
            {nodeList.length !== 0 ? (
              <GraphTree
                width={window.innerWidth / 2 + window.innerWidth / 4}
                height={600}
                parentName={nodeList[0]}
                parentIndex={0}
              />
            ) : null}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default React.memo(GraphComponent);

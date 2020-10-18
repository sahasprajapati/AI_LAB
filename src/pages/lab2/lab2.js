import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Link,
  CardHeader,
} from "@material-ui/core";
import GraphComponent from "../../features/graph/Graph";
import CodeBlock from "../../components/CodeBlock";
import { snippets } from "../../snippets";

const snip = `   A dictionary/object is used to store list of its children to maintain relation between each node and its childrens. i.e  {'parentNode': [children]}.
To add node, either children are added to existing parent key or a new parent key is created to store children for that node. 
A function addEdge(node, newNode) takes two input 'node'i.e. parent Node and 'newNode'i.e. to be added child node.
`;
const Lab2 = () => {
  const tabNameList = ["BFS", "DFS", "Graph Class"];
  const tabCodeSnippetList = [snippets.bfs, snippets.dfs, snippets.graphClass];
  // console.log(g.graph);
  return (
    <Grid item container direction="column" spacing={2}>
      <Grid item>
        <Card>
          <CardHeader title="DFS and BFS" />
          <CardContent>
            <Typography variant="body1">
              Each node can be selected. A green highlight is around currently
              selected node.
            </Typography>
            <Typography variant="body1">
              'Add node' adds child node to the currently selected node.
            </Typography>
            <Typography variant="body1">
              Show DFS and Show BFS calculates path from currently selected node
              to all its leaf nodes.
            </Typography>
            <Typography variant="body1">
              Two Nodes cannot have the same name.
            </Typography>
            <Typography variant="body2">
              *Capable of displaying Tree of Depth 6 nodes with each node having
              2 children on a full screen
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item container>
        <GraphComponent />
      </Grid>
      <Grid item xs={12}>
        <CodeBlock
          tabNameList={tabNameList}
          tabCodeSnippetList={tabCodeSnippetList}
          language="javascript"
        />
      </Grid>
      <Grid item>
        <Card>
          <CardHeader title="Adding Node" />
          <CardContent>
            <Typography>{snip}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardHeader title="Github Link" />
          <CardContent>
            <Link
              color="secondary"
              variant="body2"
              href="https://github.com/B10prajapati/AI_LAB"
            >
              {"Github Link"}
            </Link>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Lab2;

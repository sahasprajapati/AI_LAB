import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  Link,
  CardHeader,
} from "@material-ui/core";
import GraphComponent from "../../features/graph/Graph";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { snippets } from "../../snippets";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { PropTypes } from "prop-types";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <> {children} </>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const snip = `   A dictionary/object is used to store list of its children to maintain relation between each node and its childrens. i.e  {'parentNode': [children]}.
To add node, either children are added to existing parent key or a new parent key is created to store children for that node. 
A function addEdge(node, newNode) takes two input 'node'i.e. parent Node and 'newNode'i.e. to be added child node.
`;
const Lab2 = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // console.log(g.graph);
  return (
    <Container maxwidth={"lg"}>
      <Grid container direction="column" spacing={2}>
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
                Show DFS and Show BFS calculates path from currently selected
                node to all its leaf nodes.
              </Typography>
              <Typography variant="body1">
                Two Nodes cannot have the same name.
              </Typography>
              <Typography variant="body2">
                *Capable of displaying Tree of Depth 6 nodes with each node
                having 2 children on a full screen
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item container>
          <GraphComponent />
        </Grid>
        <Grid item>
          <Card>
            <CardHeader title="Code" />
            <CardContent>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Tree Graph"
              >
                <Tab label="BFS" {...a11yProps(0)} />
                <Tab label="DFS" {...a11yProps(1)} />
                <Tab label="Graph Class" {...a11yProps(2)} />
              </Tabs>

              <TabPanel value={value} index={0}>
                <SyntaxHighlighter language="javascript" style={dracula}>
                  {snippets.bfs}
                </SyntaxHighlighter>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <SyntaxHighlighter language="javascript" style={dracula}>
                  {snippets.dfs}
                </SyntaxHighlighter>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <SyntaxHighlighter language="javascript" style={dracula}>
                  {snippets.graphClass}
                </SyntaxHighlighter>
              </TabPanel>
            </CardContent>
          </Card>
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
                href="https://github.com/B10prajapati/AI_LAB"
                variant="body2"
              >
                {"Github Link"}
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Lab2;

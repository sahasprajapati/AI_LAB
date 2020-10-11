import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Tab,
  Tabs,
} from "@material-ui/core";
import SyntaxHighlighter from "react-syntax-highlighter";
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

const Lab3 = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Grid container>
        <Grid item>
          <Card>
            <CardHeader title="Code" />
            <CardContent>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Tree Graph"
              >
                <Tab label="Solved Example" {...a11yProps(0)} />
                <Tab label="Rules" {...a11yProps(1)} />
                <Tab label="Solution" {...a11yProps(2)} />
                <Tab label="Class" {...a11yProps(3)} />
              </Tabs>

              <TabPanel value={value} index={0}>
                <SyntaxHighlighter language="python" style={dracula}>
                  {snippets.water_jug_solution}
                </SyntaxHighlighter>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <SyntaxHighlighter language="python" style={dracula}>
                  {snippets.water_jug_rules}
                </SyntaxHighlighter>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <SyntaxHighlighter language="python" style={dracula}>
                  {snippets.water_jug_pour_rule}
                </SyntaxHighlighter>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <SyntaxHighlighter language="python" style={dracula}>
                  {snippets.water_jug}
                </SyntaxHighlighter>
              </TabPanel>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Lab3;

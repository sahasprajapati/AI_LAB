import { Card, CardContent, CardHeader, Tab, Tabs } from "@material-ui/core";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

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
const CodeBlock = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { tabNameList, tabCodeSnippetList, language } = props;
  return (
    <Card>
      <CardHeader title="Code" />
      <CardContent>
        <Tabs value={value} onChange={handleChange} aria-label="Tree Graph">
          {tabNameList.map((name, index) => {
            return <Tab key={index} label={name} {...a11yProps(index)} />;
          })}
        </Tabs>
        {tabCodeSnippetList.map((codeSnippet, index) => {
          return (
            <TabPanel value={value} key={index} index={index}>
              <SyntaxHighlighter
                language={language}
                style={dracula}
                lineProps={{
                  style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
                }}
                wrapLines={true}
              >
                {codeSnippet}
              </SyntaxHighlighter>
            </TabPanel>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default CodeBlock;

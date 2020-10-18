import React from "react";
import { Grid } from "@material-ui/core";
import ChatbotComponent from "../../features/chatbot/Chatbot";
import CodeBlock from "../../components/CodeBlock";
import { snippets } from "../../snippets";

const Lab5 = () => {
  const tabNameList = ["STEM", "ASK", "ChatBot Class"];
  const tabCodeSnippetList = [
    snippets.chatbot_stem,
    snippets.chatbot_ask,
    snippets.chatbot,
  ];

  return (
    <Grid item container direction="column" spacing={2}>
      <Grid item>
        <ChatbotComponent />
      </Grid>
      <Grid item xs={12} sm={12}>
        <CodeBlock
          tabNameList={tabNameList}
          tabCodeSnippetList={tabCodeSnippetList}
          language="javascript"
        />
      </Grid>
    </Grid>
  );
};
export default Lab5;

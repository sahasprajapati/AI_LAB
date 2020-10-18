import React from "react";
import { Grid } from "@material-ui/core";
import AStarSearchComponent from "../../features/aStarSearch/AStarSearch";
import CodeBlock from "../../components/CodeBlock";
import { snippets } from "../../snippets";

const Lab3 = () => {
  const tabNameList = ["Grid Generation", "Cost", "Path Calculation"];
  const tabCodeSnippetList = [
    snippets.a_star_search_grid_generation,
    snippets.a_star_search_coord_and_distance,
    snippets.a_star_search_path_calculation,
  ];

  return (
    <Grid item container direction="column" spacing={2}>
      <Grid item>
        <AStarSearchComponent />
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
export default Lab3;

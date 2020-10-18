import { Card, CardContent, Grid } from "@material-ui/core";
import React from "react";
import Controls from "../../components/Controls";
import SearchGrid from "../../components/SearchGrid";

const AStarSearchComponent = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item>
            <Controls />
          </Grid>
          <Grid item>
            <SearchGrid />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AStarSearchComponent;

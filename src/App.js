import {
  Container,
  createMuiTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Lab2 from "./pages/lab2/lab2";
import Lab3 from "./pages/lab3/lab3";
import store from "./app/store";
// Dark theme
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#26292C",
      light: "rgb(81, 91, 95)",
      dark: "rgb(26, 35, 39)",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FFB74D",
      light: "rgb(255, 197, 112)",
      dark: "rgb(200, 147, 89)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    titleBar: {
      main: "#555555",
      contrastText: "#ffffff",
    },
    error: {
      main: red.A400,
    },
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Router>
          <Header />
          <Switch>
            <Route exact from="/" render={(props) => <Lab2 {...props} />} />
            <Route exact path="/lab2" render={(props) => <Lab2 {...props} />} />
            <Route exact path="/lab3" render={(props) => <Lab3 {...props} />} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};
export default App;

import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import ClippedDrawer from "./pages/home/home";

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
        <ClippedDrawer />
      </Provider>
    </ThemeProvider>
  );
};
export default App;

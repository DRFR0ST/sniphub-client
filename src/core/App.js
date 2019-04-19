import React, { Component } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "../pages/List";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import { CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#99CC66",
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ display: "flex" }}>
          <CssBaseline />
          <Navbar />
          <Sidebar />
          <Content>
            <Router>
              <Route path="/" exact component={List} />
            </Router>
          </Content>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

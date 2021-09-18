
import React from "react";
import Header from "./ui/header/header";
import theme from "./ui/Theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/"
              component={() => { return (<div> Home </div>) }} 
              />
            <Route exact path="/Services"
              component={() => { return (<div> Services </div>) }} 
              />
            <Route exact path="/Custom Software"
              component={() => { return (<div> Custom Software </div>) }} 
              />
            <Route exact path="/Mobile Application"
              component={() => { return (<div> Mobile Application </div>) }}
              />
            <Route exact path="/Websites Application"
              component={() => { return (<div> Websites Application</div>) }}
              />
            <Route exact path="/Revolution"
              component={() => { return (<div> Revolution </div>) }} 
              />
            <Route exact path="/Contact"
              component={() => { return (<div> Contact </div>) }} 
              />
            <Route exact path="/About"
              component={() => { return (<div> About </div>) }} 
              />
            <Route exact path="/Estimate"
              component={() => { return (<div> Estimate </div>) }} 
              />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </>
  );
}

export default App;

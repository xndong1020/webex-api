import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import { Header, Sidebar } from "./navigation";
import PageNotFound from "./PageNotFound";
import { withStyles } from "@material-ui/core/styles";
import GlobalStore from "../store/GlobalState";
import { GloalStyle } from "./style";
const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
  appBarSpacer: theme.mixins.toolbar,
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  }
});
const App = props => {
  const { classes } = props;
  return (
    <div className="container-fluid" style={{ display: "flex" }}>
      <GlobalStore>
        <GloalStyle />
        <Header />
        <Sidebar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" exact component={AboutPage} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
      </GlobalStore>
    </div>
  );
};
App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);

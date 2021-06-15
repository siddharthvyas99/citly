import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { initializeLogger } from "common/logger";
import Dashboard from "components/Dashboard";
// import { registerIntercepts} from "apis/axios";

const App = () => {
  useEffect(() => {
    /*eslint no-undef: "off"*/
    initializeLogger();
    // registerIntercepts();
    logger.info("Log from js-logger");
  }, []);

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;

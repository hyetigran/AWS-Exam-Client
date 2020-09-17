import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExamOptions from "./views/ExamOptions/ExamOptions";
import ExamSessions from "./views/ExamSessions/ExamSessions";
import ExamReview from "./views/ExamReview/ExamReview";
import Navbar from "./components/navbar/Navbar";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={ExamOptions} />
            <Route
              exact
              path="/exam-sessions/:examId/:examNum"
              component={ExamSessions}
            />
            <Route exact path="/exam-review" component={ExamReview} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

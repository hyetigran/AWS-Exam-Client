import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExamOptions from "./views/ExamOptions/ExamOptions";
import ExamSessions from "./views/ExamSessions/ExamSessions";
import ExamReview from "./views/ExamReview/ExamReview";
import Navbar from "./components/navbar/Navbar";

import "./App.css";
import ExamHistory from "./views/ExamHistory/ExamHistory";

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
            <Route exact path="/exam-history" component={ExamHistory} />
            <Route
              exact
              path="/exam-review/:examType/:examNumber/:examSessionID"
              component={ExamReview}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => (
  <div>
    This is form my dashboard component
  </div>
);

const AddDashboardPage = () => (
  <div>
    This is form my add expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is form my edit expense component
  </div>
);

const HelpPage = () => (
  <div>
    This is form my help component
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddDashboardPage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.querySelector("#app"));

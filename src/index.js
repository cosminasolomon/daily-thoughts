import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Header from "./components/header";
import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";
import Logout from "./components/logout";
import Single from './components/single';
import Create from "./components/create"
import Edit from "./components/edit"
import Delete from "./components/delete"

const routing = (
  <Router>
    <React.StrictMode>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/delete/:id" component={Delete} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/ownpost/:id" component={Single} />
      </Switch>
      <Footer />
    </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// FROM REACT
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

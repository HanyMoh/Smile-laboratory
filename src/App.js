import React from 'react';
import {BrowserRouter, Route, NavLink, Switch} from "react-router-dom";
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Users from './pages/UsersPage';
import NotFound from './pages/NotFound';
import './App.css';

const HomePage = ()=><div>Home</div>

function App() {
  return (
    <div class="container-fluid">
      <BrowserRouter>
        <div className="App">
          <NavLink exact to="/">Home</NavLink>{" "}
          <NavLink to="/users">Users</NavLink>{" "}
          <NavLink to="/Page1">Page1</NavLink>{" "}
          <NavLink to="/Page2">Page2</NavLink>{" "}
          <NavLink to="/Page3">Page3</NavLink>

          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/users" component={Users} />
            <Route path="/Page1" component={Page1} />
            <Route path="/Page2" exact component={Page2} />
            <Route path="/Page3" exact component={Page3} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

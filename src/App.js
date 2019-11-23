import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage'
import Doctors from './pages/DoctorsPage';
import Patients from './pages/PatientsPage';
import Users from './pages/UsersPage';
import NotFound from './pages/NotFound';
import Menu from './components/Menu';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Menu />

        <div className="container">
          <Switch>
            <Route path="/"   exact component={HomePage} />
            <Route path="/users"    component={Users} />
            <Route path="/patients" component={Patients} />
            <Route path="/doctors"  component={Doctors} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

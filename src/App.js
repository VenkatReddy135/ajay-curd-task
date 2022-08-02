import * as React from "react";
// import { Route } from "react-router-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EmployeesList from "./components/ListingPage/index";
import ViewEmployeeDetails from "./components/ViewPage/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<EmployeesList />}></Route>
          <Route path="/:id" element={<ViewEmployeeDetails />} />
        </Routes>
      </Router>
      <div className="flex-large"></div>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Register from "./components/Register";
import Login from "./components/Login";
import Reminder from "./components/Reminder";
import AllQuestionnaires from "./components/AllQuestionnaires";
import NewQuestionnaire from "./components/NewQuestionnaire";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./components/AdminDashboard";
import NotFoundPage from "./components/NotFoundPage";

import "./styles/App.css";


const Roles = {
  Admin: "admin",
  User: "user",
};

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AdminDasboard" element={<AdminDashboard />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/Reminder" element={<Reminder />} />
          <Route
            exact
            path="/AllQuestionnaires"
            element={<AllQuestionnaires />}
          />
          <Route
            exact
            path="/NewQuestionnaire"
            element={<NewQuestionnaire />}
          />
          <Route exact path="/NotFound" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

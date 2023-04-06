import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Reminder from "./components/Reminder";
import AllQuestionnaires from "./components/AllQuestionnaires";
import NewQuestionnaire from "./components/NewQuestionnaire";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Reminder" element={<Reminder />} />
        <Route exact path="/AllQuestionnaires" element={<AllQuestionnaires />} />
        <Route exact path="/NewQuestionnaire" element={<NewQuestionnaire />} />  
      </Routes>
    </div>
  );
}

export default App;

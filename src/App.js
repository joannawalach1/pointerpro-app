import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Reminder from "./components/Reminder";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllQuestionnaires from "./components/AllQuestionnaires";
import NewQuestionnaire from "./components/NewQuestionnaire";
import "./styles/App.scss";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Register" element={<Register />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Reminder" element={<Reminder />}></Route>
          <Route exact path="/Dashboard" element={<Dashboard />}></Route>
          <Route exact path="/AllQuestionnaires" element={<AllQuestionnaires />}></Route>
          <Route exact path="/Newquestionnaire" element={<NewQuestionnaire />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

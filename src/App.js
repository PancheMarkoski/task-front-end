import React, { useState, useEffect } from "react"
import "./scss/index.scss"
import { Routes, Route } from "react-router-dom";
//PAGES
import Register from "./pages/Register"
import Login from "./pages/Login"
import AddEvent from "./pages/AddEvent"
import EventsList from "./pages/EventsList";
import EditEvent from "./pages/EditEvent"
//COMPONENT
import TopBar from "./components/TopBar"

function App() {
  const [loginedScreen, setLoginedScreen] = useState(false);

  //CHECK IF USER IS AUTHENTICATED RENDER EVENT SCREEN
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLoginedScreen(true)
    }
  }, [])

  //AFTER USER IS LOG IN RENDER EVENT SCREEN
  const afterLogin = (user) => {
    localStorage.setItem("user", user)
    setLoginedScreen(true);
  }

  //AFTER USER IS LOG OUT RENDER LOG IN SCREEN
  const afterLogout = () => {
    localStorage.removeItem('user');
    setLoginedScreen(false);
  }

  return (
    <div className="App">
      <TopBar afterLogout={afterLogout} />
      <Routes >
        {loginedScreen || localStorage.getItem("user") ? <Route path="/" element={<EventsList />} /> : <Route path="/" element={<Login afterLogin={afterLogin} />} />}
        {loginedScreen || localStorage.getItem("user") ? <Route path="/addevent" element={<AddEvent />} /> : <Route path="/register" element={<Register afterLogin={afterLogin} />} />}
        {loginedScreen || localStorage.getItem("user") ? <Route path="/editevent/:id" element={<EditEvent />} /> : null}
      </Routes>
    </div>
  );
}

export default App;


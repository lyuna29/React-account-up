import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Login from "./components/Auths/Login";
import SignUp from "./components/Auths/SignUp";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";

function App() {
  const [expenses, setExpenses] = useState([]);

  const [user, setUser] = useState(null);

  console.log("로그인된 유저정보:", user);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout user={user} setUser={setUser} />}>
            <Route
              index
              element={
                <Home
                  user={user}
                  expenses={expenses}
                  setExpenses={setExpenses}
                />
              }
            />
            <Route
              path="/detail/:id"
              element={<Detail expenses={expenses} setExpenses={setExpenses} />}
            />
            <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser} />}
            />
          </Route>
          <Route path="/auths/login" element={<Login setUser={setUser} />} />
          <Route path="/auths/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

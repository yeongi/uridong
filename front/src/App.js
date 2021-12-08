import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import RstDetail from "./page/RstDetail";
import RstApply from "./page/RstApply";
import User from "./page/User";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <div>
          <Link to="/">Home</Link>
          <br />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="restaraunt/:rstnum" element={<RstDetail />} />
          <Route path="user" element={<User />}>
            <Route path="apply" element={<RstApply />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

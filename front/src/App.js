import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import RstDetail from "./page/RstDetail";
import RstApply from "./page/RstApply";
import User from "./page/User";

function App() {
  return (
    <>
      <div className="wrapper">
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/signup">회원가입</Link>
          <br />
          <Link to="/login">로그인</Link>
          <br />
          <Link to="/user">마이페이지</Link>
          <br />
          <Link to="/restaraunt">식당</Link>
          <br />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="restaraunt" element={<RstDetail />} />
          <Route path="user" element={<User />}>
            <Route path="apply" element={<RstApply />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

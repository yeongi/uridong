import { TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import UserAPI from "../api/User";
import MemberCtx from "../store/memberContext";

const Login = () => {
  const [memId, setId] = useState("");
  const [memPw, setPw] = useState("");
  const memberCtx = useContext(MemberCtx);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    const member = { id: memId, pw: memPw };

    const result = await UserAPI.checkLogin(member);
    const data = await result.json();

    if (data.status === 200 && data.message === "Success") {
      memberCtx.onLogIn();
      navigate("/");
    } else {
      alert("로그인 실패 ");
    }
  };

  return (
    <>
      <h1>로그인 페이지</h1>
      <TextField
        required
        label="Id"
        value={memId}
        onChange={(e) => {
          setId(e.target.value);
        }}
        autoComplete="아이디 입력"
        variant="standard"
      />

      <br />
      <TextField
        required
        label="Password"
        value={memPw}
        onChange={(e) => {
          setPw(e.target.value);
        }}
        type="password"
        autoComplete="비밀번호 입력"
        variant="standard"
      />
      <br />
      <Button
        variant="contained"
        onClick={(e) => {
          navigate("/");
        }}
      >
        홈으로
      </Button>
      <Button variant="contained" onClick={loginHandler}>
        로그인
      </Button>
    </>
  );
};

export default Login;

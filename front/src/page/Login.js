import { TextField, Button } from "@mui/material";

const Login = () => {
  return (
    <>
      <h1>로그인 페이지</h1>
      <TextField
        required
        label="Id"
        autoComplete="아이디 입력"
        variant="standard"
      />

      <br />
      <TextField
        required
        label="Password"
        type="password"
        autoComplete="비밀번호 입력"
        variant="standard"
      />
      <br />
      <Button variant="contained">회원가입</Button>
      <Button variant="contained">로그인</Button>
    </>
  );
};

export default Login;

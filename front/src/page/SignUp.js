import { TextField, Button } from "@mui/material";
import { useState } from "react";
import User from "../api/User";

const SignUp = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferArea, setPreferArea] = useState("");

  const submitMember = (e) => {
    e.preventDefault();

    const userInfo = {
      phone: phone,
      name: name,
      email: email,
      id: id,
      pw: pw,
      area: preferArea,
    };

    User.create(userInfo);
  };

  return (
    <>
      <h1>회원가입 페이지</h1>

      <TextField
        required
        label="Name"
        value={name}
        autoComplete="이름 입력"
        onChange={(e) => {
          setName(e.target.value);
        }}
        variant="standard"
      />
      <br />
      <TextField
        required
        label="Id"
        value={id}
        autoComplete="아이디 입력"
        onChange={(e) => {
          setId(e.target.value);
        }}
        variant="standard"
      />

      <br />
      <TextField
        required
        label="Password"
        value={pw}
        type="password"
        onChange={(e) => {
          setPw(e.target.value);
        }}
        autoComplete="비밀번호 입력"
        variant="standard"
      />
      <br />
      <TextField
        required
        label="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        autoComplete="이메일 입력"
        variant="standard"
      />
      <br />
      <TextField
        required
        label="PhoneNum"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        autoComplete="전화번호 입력"
        variant="standard"
      />
      <br />
      <TextField
        required
        label="선호지역"
        value={preferArea}
        onChange={(e) => {
          setPreferArea(e.target.value);
        }}
        autoComplete="선호지역"
        variant="standard"
      />
      <br />
      <p>선호지역</p>
      <br />
      <Button variant="contained" onClick={submitMember}>
        회원가입
      </Button>
    </>
  );
};

export default SignUp;

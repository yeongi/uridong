import { Select, TextField } from "@mui/material";
import { useContext } from "react";
import MemberCtx from "../store/memberContext";

const ApplyRsv = () => {
  const memberCtx = useContext(MemberCtx);
  return (
    <>
      <h1>예약 신청 하기</h1>
      {memberCtx.isLoggedIn && (
        <>
          <h3>예약 하기</h3>
          <hr />
          <label>보유 쿠폰</label>
          <p>쿠폰 목록 나열</p>
          <br />
          <label>예상 도착 시간</label>
          <TextField required label="분" variant="standard" />
          <br />
          <label>예약 인원</label>
          <TextField required label="몇명" variant="standard" />
        </>
      )}
      {!memberCtx.isLoggedIn && (
        <>
          <h1>예약을 하려면 로그인을 하세요.</h1>
        </>
      )}
    </>
  );
};

export default ApplyRsv;

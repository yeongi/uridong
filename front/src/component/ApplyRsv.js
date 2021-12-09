import { Button, TextField } from "@mui/material";
import { useContext } from "react";
import MemberCtx from "../store/memberContext";

const ApplyRsv = () => {
  const memberCtx = useContext(MemberCtx);
  return (
    <>
      <h1>예약 신청 하기</h1>
      {memberCtx.isLoggedIn && (
        <>
          <br />
          <label>예상 도착 시간</label>
          <TextField required label="분" variant="standard" />
          <br />
          <label>예약 인원</label>
          <TextField required label="몇명" variant="standard" />
          <br />
          <Button variant="contained">예약하기</Button>
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

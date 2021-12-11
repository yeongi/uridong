import { Button, TextField } from "@mui/material";
import { useContext, useState, useCallback } from "react";
import MemberCtx from "../../store/memberContext";
import UserAPI from "../../api/User";

const ApplyRsv = (props) => {
  const memberCtx = useContext(MemberCtx);
  const [time, setTime] = useState();
  const [people, setPeople] = useState();

  const addMyRsv = useCallback(async () => {
    const result = await UserAPI.postMyRsv({
      member_num: memberCtx.member.num,
      rst_num: props.rstnum,
      rsv_man: people,
      arrive_predict_time: time,
    });
    const data = await result.json();
    alert(data.message);
  });

  return (
    <>
      <h1>예약 신청 하기</h1>
      {memberCtx.isLoggedIn && (
        <>
          <br />
          <label>예상 도착 시간</label>
          <TextField
            required
            label="분"
            variant="standard"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <br />
          <label>예약 인원</label>
          <TextField
            required
            label="몇명"
            variant="standard"
            onChange={(e) => setPeople(e.target.value)}
            value={people}
          />
          <br />
          <Button variant="contained" onClick={addMyRsv}>
            예약하기
          </Button>
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

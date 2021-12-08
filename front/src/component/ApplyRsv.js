import { useContext } from "react";
import MemberCtx from "../store/memberContext";

const ApplyRsv = () => {
  const memberCtx = useContext(MemberCtx);
  return (
    <>
      <h1>예약 신청 하기</h1>
      {memberCtx.isLoggedIn && (
        <>
          <h3>예약 폼 만들기</h3>
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

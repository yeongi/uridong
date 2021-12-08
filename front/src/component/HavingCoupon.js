import { useContext } from "react";
import MemberCtx from "../store/memberContext";

const HavigCoupon = (props) => {
  const memberCtx = useContext(MemberCtx);

  return (
    <>
      <h1>쿠폰 보유 목록</h1>
      {memberCtx.isLoggedIn && (
        <>
          <h3>쿠폰 보유 목록 표시</h3>
        </>
      )}
      {!memberCtx.isLoggedIn && (
        <>
          <h1>로그인을 안했습니다.</h1>
        </>
      )}
    </>
  );
};

export default HavigCoupon;

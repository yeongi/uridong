import { useContext } from "react";
import MemberCtx from "../store/memberContext";

const HavigCoupon = (props) => {
  const memberCtx = useContext(MemberCtx);

  return (
    <>
      {memberCtx.isLoggedIn && (
        <>
          <h3>쿠폰 보유 목록 표시</h3>
          <p>회원번호 : {memberCtx.member.num}</p>
          <p>식당번호 : {props.rstnum}</p>
          <hr />
          <p>쿠폰 이름 : 발급 날짜: 만료 날짜: </p>
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

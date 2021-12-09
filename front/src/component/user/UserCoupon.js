import React, { useContext, useEffect } from "react";
import CpApi from "../../api/Coupon";
import MemberCtx from "../../store/memberContext";

const UserCoupon = () => {
  const memberCtx = useContext(MemberCtx);

  let couponList;

  useEffect(() => {
    const getMyCP = async () => {
      const result = await CpApi.getMyCouponList(memberCtx.member.num);
      return result;
    };
    couponList = getMyCP();
  }, []);
  console.log(couponList);
  return (
    <div>
      <h1>쿠폰</h1>
    </div>
  );
};

export default UserCoupon;
<h1>쿠폰</h1>;

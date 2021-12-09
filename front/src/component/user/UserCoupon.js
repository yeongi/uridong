import React, { useCallback, useContext, useEffect, useState } from "react";
import CpApi from "../../api/Coupon";
import MemberCtx from "../../store/memberContext";
import CouponList from "./CouponList";

const UserCoupon = () => {
  const [coupon, setCoupon] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const memberCtx = useContext(MemberCtx);

  const getMyCP = useCallback(async () => {
    const result = await CpApi.getMyCouponList(memberCtx.member.num);
    const data = await result.json();
    console.log();
    setCoupon(data.data);
  }, [coupon, isLoading]);

  useEffect(() => {
    getMyCP();
    setLoading(true);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>보유 쿠폰</h1>
      {isLoading &&
        coupon.map((element) => {
          return (
            <CouponList
              key={element.coupon_num}
              print_attime={element.print_attime}
              end_attime={element.end_attime}
              use_yn={element.use_yn}
            />
          );
        })}
    </div>
  );
};

export default UserCoupon;

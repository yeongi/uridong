import React from "react";

const CouponList = (props) => {
  const enddate = new Date(props.end_attime);
  const printDate = new Date(props.print_attime);

  return (
    <div>
      <p>
        쿠폰 이름 : {props.coupon_name} <br />
        발급날짜 : {printDate.toLocaleString()} <br />
        만료날짜 : {enddate.toLocaleString()} <br />
        사용여부 : {props.use_yn === 0 ? "미사용" : "사용"} <br />
      </p>
    </div>
  );
};

export default CouponList;

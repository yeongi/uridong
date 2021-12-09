import React from "react";
import classes from "../../style/layout.module.css";

const FavList = (props) => {
  return (
    <div className={classes["over-scroll"]}>
      <p>
        즐겨찾기 시작날짜 : {props.favorite_start_date} <br />
        예약 이행 횟수 : {props.rsv_do_count} <br />
        쿠폰 사용 횟수 : {props.coupon_use_count} <br />
        단골여부 : {props.patron_yn} <br />
        단골 시작 날짜 : {props.patron_start_date}
        <br />
        마지막 리뷰 작성 날짜 : {props.last_review_date} <br />
      </p>
    </div>
  );
};

export default FavList;

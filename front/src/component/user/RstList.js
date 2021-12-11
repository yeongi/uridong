import React from "react";
import BasicModal from "../../lib/BasicModal";
import classes from "../../style/layout.module.css";

const RstList = (props) => {
  const date = new Date(props.rst_regist_date);
  return (
    <div>
      <hr />
      <p>{props.rst_name}</p> <br />
      <p>식당 지역 : {props.rst_address}</p> <br />
      <p>식당 등록일자 : {date.toDateString()}</p> <br />
      <div className={classes["btn-wrapper"]}>
        <BasicModal btn_name="쿠폰 만들기">쿠폰 만들기</BasicModal>
        <BasicModal btn_name="쿠폰뿌리기">쿠폰뿌리기</BasicModal>
        <BasicModal btn_name="단골 손님 관리">단골 손님 관리</BasicModal>
      </div>
    </div>
  );
};

export default RstList;

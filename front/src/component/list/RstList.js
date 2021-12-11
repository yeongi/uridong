import React from "react";
import BasicModal from "../../lib/BasicModal";
import classes from "../../style/layout.module.css";
import CouponForm from "../form/CouponForm";
import PatronList from "./PatronList";
import RstFavList from "./RstFavList";

const RstList = (props) => {
  const date = new Date(props.rst_regist_date);
  return (
    <div>
      <hr />
      <p>{props.rst_name}</p> <br />
      <p>식당 지역 : {props.rst_address}</p> <br />
      <p>식당 등록일자 : {date.toDateString()}</p> <br />
      <div className={classes["btn-wrapper"]}>
        <BasicModal btn_name="쿠폰 만들기">
          <CouponForm rst_num={props.rst_num} />
        </BasicModal>
        <BasicModal btn_name="쿠폰뿌리기">
          <RstFavList rst_num={props.rst_num} />
        </BasicModal>
        <BasicModal btn_name="단골 손님 관리">
          <PatronList rst_num={props.rst_num} />
        </BasicModal>
      </div>
    </div>
  );
};

export default RstList;

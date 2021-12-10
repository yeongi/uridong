import { Button } from "@mui/material";
import React from "react";

const RstList = (props) => {
  const date = new Date(props.rst_regist_date);
  return (
    <div>
      <hr />
      <p>{props.rst_name}</p> <br />
      <p>식당 지역 : {props.rst_address}</p> <br />
      <p>식당 등록일자 : {date.toDateString()}</p> <br />
      <Button>쿠폰 만들기</Button>
      <Button>쿠폰 뿌리기</Button>
      <Button>단골 손님 관리</Button>
    </div>
  );
};

export default RstList;

import React from "react";

const RstList = (props) => {
  const date = new Date(props.rst_regist_date);
  return (
    <div>
      <hr />
      <p>{props.rst_name}</p> <br />
      <p>식당 지역 : {props.rst_address}</p> <br />
      <p>식당 등록일자 : {date.toDateString()}</p> <br />
    </div>
  );
};

export default RstList;

import React, { useEffect, useContext, useCallback, useState } from "react";
import classes from "../../style/layout.module.css";
import { Button } from "@mui/material";
import UserAPI from "../../api/User";
import MemberCtx from "../../store/memberContext";
import CpApi from "../../api/Coupon";

const Notification = () => {
  const [notice, setList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const memberCtx = useContext(MemberCtx);

  const getMyPlay = useCallback(async () => {
    const result = await UserAPI.getMyNotice(memberCtx.member.num);
    const data = await result.json();
    setList(data.data);
    console.log(data);
  }, [notice, isLoading]);

  const postGiveCoupon = async (e) => {
    const result = await CpApi.postGiveRstCp({
      member_num: e.member_num,
      coupon_num1: e.coupon_num,
      coupon_num2: e.coupon_num,
      No_num: e.No_num,
    });
    console.log(result);
  };

  useEffect(() => {
    getMyPlay();
    setLoading(true);
    //eslint-disable-next-line
  }, []);

  return (
    <div className={classes["notification-wrap"]}>
      <h1>알림</h1>
      <hr />
      <div className={classes["notification-item"]}>
        <p>알림 타입</p>
        <p>알림 내용</p>
        <p>비고</p>
      </div>
      {notice.map((e) => {
        return (
          <div className={classes["notification-item"]}>
            <p>{e.content_devision}</p>
            <p>{e.NO_content}</p>
            <Button
              onClick={(event) => {
                postGiveCoupon(e);
              }}
            >
              받기
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Notification;

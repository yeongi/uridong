import React, { useEffect, useContext, useCallback, useState } from "react";
import classes from "../../style/layout.module.css";
import { Button } from "@mui/material";
import BasicModal from "../../lib/BasicModal";
import UserAPI from "../../api/User";
import MemberCtx from "../../store/memberContext";
import CpApi from "../../api/Coupon";

const Notification = () => {
  const [notice, setList] = useState([]);
  const [ranking, setRanking] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [isLoad, setLoad] = useState(false);
  const memberCtx = useContext(MemberCtx);

  const getMyPlay = useCallback(async () => {
    const result = await UserAPI.getMyNotice(memberCtx.member.num);
    const data = await result.json();
    setList(data.data);
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

  const getMyRaking = async () => {
    const result = await UserAPI.getMyRaking(memberCtx.member.num);
    const data = await result.json();
    setRanking(data.data[0]);
    console.log(ranking);
  };

  useEffect(() => {
    getMyPlay();
    getMyRaking();
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
            {e.content_devision === "점수" && (
              <BasicModal btn_name="확인하기">
                {isLoad && (
                  <>
                    <h1>내 점수 는 ???!!</h1>
                    <hr />
                    <p>내 순위는 {ranking.rank}위 입니다.</p>
                    <p>내 점수는 {ranking.sum_score}점 입니다.</p>
                    <p>내 점수는 상위 {ranking.percent}% 입니다.</p>
                    <hr />
                    <p>우수 회원이 되려면 상위 40% 이상이 되어야 합니다.</p>
                  </>
                )}
                <Button
                  onClick={(e) => {
                    getMyRaking();
                    setLoad(true);
                  }}
                >
                  확인하기{" "}
                </Button>
              </BasicModal>
            )}
            {e.content_devision === "쿠폰" && (
              <Button
                onClick={(event) => {
                  postGiveCoupon(e);
                }}
              >
                받기
              </Button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Notification;

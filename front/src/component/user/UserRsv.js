import { Button } from "@mui/material";
import React, { useCallback, useContext, useEffect, useState } from "react";
import RsvApi from "../../api/Rsv";
import BasicModal from "../../lib/BasicModal";
import MemberCtx from "../../store/memberContext";
import Review from "../form/Review";

const UserRsv = () => {
  const [rsvList, setList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const memberCtx = useContext(MemberCtx);

  const getMyRsv = useCallback(async () => {
    const result = await RsvApi.getMyRsvList(memberCtx.member.num);
    const data = await result.json();
    setList(data.data);
  }, [rsvList, isLoading]);

  useEffect(() => {
    getMyRsv();
    setLoading(true);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>예약 내역 확인</h1>
      <hr />
      {isLoading &&
        rsvList.map((e) => {
          return (
            <>
              <p>예약번호 : {e.rsv_num}</p>
              <p>식당 번호 : {e.rst_num}</p>
              <p>예약 상태 : {e.rsv_status}</p>
              <p>예약 시간: {e.rsv_attime}</p>
              <p>예약 인원: {e.rsv_man} 명</p>
              <p>예상 도착 시간 : {e.arrive_predict_time} 분</p>
              {e.rsv_status === "대기" && <Button>예약 완료로 바꾸기</Button>}
              {e.rsv_status === "이행" && (
                <BasicModal btn_name="리뷰 작성 하기"></BasicModal>
              )}
              {e.rsv_status === "리뷰작성완료" && <p>--리뷰 작성 완료--</p>}
              <hr />
              <BasicModal btn_name="리뷰 작성 하기">
                <Review membernum={memberCtx.member.num} rstnum={e.rst_num} />
              </BasicModal>
            </>
          );
        })}
    </div>
  );
};

export default UserRsv;

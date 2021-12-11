import { Button } from "@mui/material";
import React, { useCallback, useContext, useEffect, useState } from "react";
import FavApi from "../../api/Fav";
import classes from "../../style/layout.module.css";

const RstFavList = (props) => {
  const [favList, setList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getRstFav = useCallback(async () => {
    const result = await FavApi.getFavMember(props.rst_num);
    const data = await result.json();
    setList(data.data);
  }, [favList, isLoading]);

  useEffect(() => {
    getRstFav();
    setLoading(true);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>즐겨찾기 추가한 손님 목록</h1>
      <p>즐겨 찾기 한 사람 목록</p>
      <hr />
      <div className={classes["list-wrapper"]}>
        <div className={classes["list-nav"]}>
          <p>회원 번호</p>
          <p>회원 이름</p>
          <p>즐겨찾기 시작 날짜</p>
          <p>비고</p>
        </div>
        <hr />
        {isLoading &&
          favList.map((e) => {
            return (
              <div className={classes["list-nav"]}>
                <p>{e.member_num}</p>
                <p>{e.member_name}</p>
                <p>{e.favorite_start_date}</p>
                <Button>쿠폰 지급하기</Button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RstFavList;

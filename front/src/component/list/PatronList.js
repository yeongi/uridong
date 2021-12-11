import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useCallback, useContext, useEffect, useState } from "react";
import FavApi from "../../api/Fav";
import CpApi from "../../api/Coupon";
import classes from "../../style/layout.module.css";

let isRender = false;

const PatronList = (props) => {
  const [favList, setList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [cpList, setCpList] = useState([]);
  const [selectCp, setCp] = useState();

  const getRstFav = useCallback(async () => {
    isRender = false;
    const result = await FavApi.getPatronMember(props.rst_num);
    const data = await result.json();
    setList(data.data);
  }, [favList, isLoading]);

  const getReviewFav = useCallback(async () => {
    isRender = true;
    const result = await FavApi.getPatronReviewMember(props.rst_num);
    const data = await result.json();
    console.log(result);
    setList(data.data);
  }, [favList, isLoading]);

  const getCpList = useCallback(async () => {
    const result = await CpApi.getRstCpList(props.rst_num);
    const data = await result.json();
    setCpList(data.data);
  }, [cpList, isLoading]);

  useEffect(() => {
    getRstFav();
    getCpList();
    setLoading(true);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>단골손님 목록</h1>
      <hr />
      <div className={classes["list-wrapper"]}>
        <div className={classes["list-nav"]}>
          <p>회원 번호</p>
          <p>회원 이름</p>
          <p>즐겨찾기 시작 날짜</p>
          <p>단골 일 수</p>
          <p>마지막 리뷰 작성 날짜</p>
        </div>
        <hr />
        {isLoading &&
          favList.map((e) => {
            return (
              <div className={classes["list-nav"]}>
                <p>{e.member_num}</p>
                <p>{e.member_name}</p>
                <p>{e.favorite_start_date}</p>
                <p>{e.patron_day}</p>
                <p>{e.last_review_date}</p>
              </div>
            );
          })}
        <hr />
        {!isRender && (
          <Button onClick={getReviewFav}>
            최근 한달간 리뷰 작성 안한 단골 보기
          </Button>
        )}
        {isRender && <Button onClick={getRstFav}>모든 단골 보기</Button>}
        <Button>쿠폰 전체 지급</Button>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="select-coupon">쿠폰 선택하기</InputLabel>
          <Select
            labelId="select-coupon"
            value={selectCp}
            label="쿠폰선택"
            onChange={(e) => setCp(e.target.value)}
          >
            {cpList.map((cp) => {
              return (
                <MenuItem value={cp.coupon_num} key={cp.coupon_num}>
                  {cp.coupon_name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default PatronList;

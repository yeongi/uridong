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

const RstFavList = (props) => {
  const [favList, setFavList] = useState([]);
  const [cpList, setCpList] = useState([]);
  const [selectCp, setCp] = useState();
  const [isLoading, setLoading] = useState(false);

  const getRstFav = useCallback(async () => {
    const result = await FavApi.getFavMember(props.rst_num);
    const data = await result.json();
    setFavList(data.data);
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
          favList.map((member) => {
            return (
              <div className={classes["list-nav"]}>
                <p>{member.member_num}</p>
                <p>{member.member_name}</p>
                <p>{member.favorite_start_date}</p>
                <Button>쿠폰 지급하기</Button>
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
            );
          })}
      </div>
    </div>
  );
};

export default RstFavList;

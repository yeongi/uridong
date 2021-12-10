import React, { useState, useEffect, useCallback, useContext } from "react";
import Restaurant from "./Restaurant";
import classes from "../style/rst.module.css";
import RstApi from "../api/Restaraunt";
import MemberCtx from "../store/memberContext";

const Favorite = () => {
  const [rstList, setRstList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const memberCtx = useContext(MemberCtx);

  const getFav = useCallback(async () => {
    const result = await RstApi.getFavRstList(memberCtx.member.num);
    const data = await result.json();
    console.log(data);
    setRstList(data.data);
    //eslint-disable-next-line
  }, [rstList, isLoading]);

  useEffect(() => {
    getFav();
    setLoading(true);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>즐겨찾기한 식당</h1>
      <div className={classes["rest-wrapper"]}>
        {isLoading &&
          rstList.map((item) => {
            return (
              <Restaurant
                key={item.rst_num}
                rst_num={item.rst_num}
                img="alt"
                rst_name={item.rst_name}
                table_count={item.all_table_each}
                use_table={item.use_table}
                rsv_count={item.rsv_table}
                review_count={item.review_each}
                rating={item.rst_star}
              />
            );
          })}
      </div>
    </>
  );
};

export default Favorite;

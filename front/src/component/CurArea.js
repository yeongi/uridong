import React, { useState, useEffect, useCallback } from "react";
import Restaurant from "./Restaurant";
import classes from "../style/rst.module.css";
import RstApi from "../api/Restaraunt";

const CurArea = () => {
  const [rstList, setRstList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getArea = useCallback(async () => {
    const result = await RstApi.getAreaRst("주례동");
    const data = await result.json();
    console.log(data);
    setRstList(data.data);
  }, [rstList, isLoading]);

  useEffect(() => {
    getArea();
    setLoading(true);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>현재 접속한 지역 : 주례동</h1>
      <div className={classes["rest-wrapper"]}>
        {isLoading &&
          rstList.map((item) => {
            return (
              <Restaurant
                key={item.rst_num}
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

export default CurArea;

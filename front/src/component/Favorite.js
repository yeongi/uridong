import React from "react";
import Restaurant from "./Restaurant";
import classes from "../style/rst.module.css";

const Favorite = () => {
  return (
    <div>
      <h1>즐겨찾기한 식당</h1>
      <div className={classes["rest-wrapper"]}>
        <Restaurant
          img="alt"
          rst_name="이모식당"
          table_count="20"
          use_table="10"
          rsv_count="2"
          review_count="102"
          rating="3.22"
        />
        <Restaurant
          img="alt"
          rst_name="이모식당"
          table_count="20"
          use_table="10"
          rsv_count="2"
          review_count="102"
          rating="3.22"
        />
        <Restaurant
          img="alt"
          rst_name="이모식당"
          table_count="20"
          use_table="10"
          rsv_count="2"
          review_count="102"
          rating="3.22"
        />
      </div>
    </div>
  );
};

export default Favorite;

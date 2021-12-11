import React, { useCallback, useContext, useEffect, useState } from "react";
import MemberCtx from "../../store/memberContext";
import UserAPI from "../../api/User";
import FavList from "../list/FavList";

const UserFav = () => {
  const [favList, setFav] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const memberCtx = useContext(MemberCtx);

  const getMyFav = useCallback(async () => {
    const result = await UserAPI.getMyFav(memberCtx.member.num);
    const data = await result.json();
    console.log();
    setFav(data.data);
  }, [favList, isLoading]);

  useEffect(() => {
    getMyFav();
    setLoading(true);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>유저 즐겨찾기</h1>
      {isLoading &&
        favList.map((element) => {
          return (
            <FavList
              key={element.rst_num}
              favorite_start_date={element.favorite_start_date}
              rsv_do_count={element.rsv_do_count}
              patron_start_date={element.patron_start_date}
              coupon_use_count={element.coupon_use_count}
              patron_yn={element.patron_yn}
              last_review_date={element.last_review_date}
            />
          );
        })}
    </div>
  );
};

export default UserFav;

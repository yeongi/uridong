import React, { useCallback, useContext, useEffect, useState } from "react";
import UserAPI from "../../api/User";
import MemberCtx from "../../store/memberContext";
import RstList from "../list/RstList";

const UserRst = () => {
  const [rstList, setRst] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const memberCtx = useContext(MemberCtx);

  const getMyFav = useCallback(async () => {
    const result = await UserAPI.getMyRst(memberCtx.member.num);
    const data = await result.json();

    setRst(data.data);
  }, [rstList, isLoading]);

  useEffect(() => {
    getMyFav();
    setLoading(true);
    //eslint-disable-next-line
    console.log(rstList);
  }, []);

  return (
    <div>
      <h1>내가 등록한 식당 : 사장님 페이지</h1>
      {isLoading &&
        rstList.map((element) => {
          return (
            <RstList
              key={element.rst_num}
              rst_num={element.rst_num}
              rst_address={element.rst_address}
              rst_name={element.rst_name}
              rst_regist_date={element.rst_regist_date}
            />
          );
        })}
    </div>
  );
};

export default UserRst;

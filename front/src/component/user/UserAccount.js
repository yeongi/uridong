import React, { useCallback, useContext, useEffect, useState } from "react";
import UserAPI from "../../api/User";
import MemberCtx from "../../store/memberContext";

const UserAccount = () => {
  const [account, setAccount] = useState({});
  const [isLoading, setLoading] = useState(false);
  const memberCtx = useContext(MemberCtx);

  const getMyInfo = useCallback(async () => {
    const result = await UserAPI.getMyInfo(memberCtx.member.num);
    const data = await result.json();
    setAccount(data.data[0]);
    //eslint-disable-next-line
  }, [account, isLoading]);

  useEffect(() => {
    getMyInfo();
    setLoading(true);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>유저 계정 정보</h1>
      {isLoading && (
        <div>
          <p>이름 : {account.member_name}</p>
          <p>등급 : {account.member_grade}</p>
          <p>전화번호 : {account.member_call_num}</p>
          <p>이메일 : {account.member_email}</p>
          <p>선호지역 : {account.last_login}</p>
          <p>마지막 로그인 날짜 : {account.last_login}</p>
        </div>
      )}
    </div>
  );
};

export default UserAccount;

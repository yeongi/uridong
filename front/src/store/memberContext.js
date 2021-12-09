import React, { useEffect, useState, useMemo } from "react";

const MemberCtx = React.createContext({
  // userId: null,
  // sessionId: null,
  isLoggedIn: false,
  member: {},
  onLogIn: () => {},
  onLogOut: () => {},
});

export const MemberContextProvider = (props) => {
  //state
  const [member, setIsLoggedIn] = useState({
    isLoggedIn: false,
    num: "",
    id: "",
    name: "",
    like_area: "",
  });

  //handler
  const onLogInHandler = (member) => {
    setIsLoggedIn(member);
  };

  const onLogOutHandler = () => {
    setIsLoggedIn({
      isLoggedIn: false,
      num: "",
      id: "",
      name: "",
      like_area: "",
    });
  };

  //객체를 기억하기 위해 캐싱을 한번 함
  const memoValue = useMemo(
    () => ({
      isLoggedIn: member.isLoggedIn,
      member: member,
      onLogIn: onLogInHandler,
      onLogOut: onLogOutHandler,
    }),
    [member]
  );

  return (
    <MemberCtx.Provider value={memoValue}>{props.children}</MemberCtx.Provider>
  );
};

export default MemberCtx;

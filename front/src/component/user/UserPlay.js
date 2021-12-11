import React, { useCallback, useContext, useEffect, useState } from "react";
import UserAPI from "../../api/User";
import MemberCtx from "../../store/memberContext";

import PlayList from "../list/PlayList";

const UserPlay = () => {
  const [play, setPlay] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const memberCtx = useContext(MemberCtx);

  const getMyPlay = useCallback(async () => {
    const result = await UserAPI.getMyPlay(memberCtx.member.num);
    const data = await result.json();
    console.log();
    setPlay(data.data);
  }, [play, isLoading]);

  useEffect(() => {
    getMyPlay();
    setLoading(true);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>유저 활동</h1>
      {isLoading &&
        play.map((element) => {
          return (
            <PlayList
              key={element.member_num}
              play_date={element.play_date}
              end_date={element.end_date}
              score={element.score}
              play_text={element.play_text}
            />
          );
        })}
    </div>
  );
};

export default UserPlay;

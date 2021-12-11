import React from "react";

const PlayList = (props) => {
  const playDate = new Date(props.play_date);
  const endDate = new Date(props.end_date);
  return (
    <div>
      <hr />
      <p>점수 : {props.score}</p> <br />
      <p>활동설명 : {props.play_text}</p> <br />
      <p>활동 날짜 : {playDate.toLocaleString()}</p>
      <p>만료날짜 : {endDate.toLocaleString()}</p>
    </div>
  );
};

export default PlayList;

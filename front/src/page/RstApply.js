import { Box } from "@mui/system";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RstApi from "../api/Restaraunt";

const RstApply = () => {
  const nav = useNavigate();

  //식당 state
  const [restaraunt, setRestaraunt] = useState({
    rst_name: "",
    rst_call_num: "",
    rst_addr: "",
    rst_category: "",
    patron_rule: "",
    patron_maintain: "",
    all_table_each: "",
    rule_table: "",
    max_predict_time: "",
  });

  const onChangeMyInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRestaraunt((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const rstApplyHandler = async (e) => {
    e.preventDefault();

    console.log("신청 시작");
    console.log(restaraunt);

    const result = await RstApi.create(restaraunt);
    const data = await result.json();

    console.log("식당 신청 결과", data);
    if (data.status === 200) {
      alert("신청 완료");
      nav("/user");
    }
  };

  return (
    <>
      <h1>식당 신청 페이지</h1>
      <hr />
      <Link to="/user">나가기 </Link>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        variant="filled"
      >
        <h3>식당 기본 정보 </h3>
        <p>서비스를 이용하기 위한 기본 식당 정보</p>
        <TextField
          required
          name="rst_name"
          label="식당 이름"
          variant="filled"
          onChange={onChangeMyInput}
          value={restaraunt.rst_name}
        />
        <br />
        <TextField
          required
          name="rst_call_num"
          label="식당 전화번호"
          variant="filled"
          onChange={onChangeMyInput}
          value={restaraunt.rst_call_num}
        />
        <br />
        <TextField
          required
          name="rst_addr"
          label="식당 주소"
          variant="filled"
          onChange={onChangeMyInput}
          value={restaraunt.rst_addr}
        />
        <br />
        <p>카테고리 넣기</p>
        <br />
        <hr />
        <h3>단골 설정</h3>
        <p>단골 서비스를 위한 조건</p>
        <p>단골 조건 : 예약 이행 횟수 </p>
        <TextField
          required
          name="patron_rule"
          type="number"
          label="단골 달성 조건 : 예약 이행 횟수"
          variant="filled"
          onChange={onChangeMyInput}
          value={restaraunt.parton_rule}
        />
        <br />
        <p>단골 유지 기준 : 쿠폰 사용 횟수 </p>
        <TextField
          required
          name="patron_maintain"
          type="number"
          label=" 단골 유지 조건 쿠폰 사용 횟수"
          variant="filled"
          onChange={onChangeMyInput}
          value={restaraunt.patron_maintain}
        />
        <br />

        <hr />
        <h3>예약을 받기 위한 정보 </h3>
        <p>간단한 예약을 위한 상세 정보 입력 </p>
        <TextField
          required
          name="all_table_each"
          label="전체 식탁 개수"
          variant="filled"
          onChange={onChangeMyInput}
          value={restaraunt.all_table_each}
        />
        <br />

        <TextField
          required
          name="rule_table"
          label="예약 기준 현재 식탁 수"
          variant="filled"
          onChange={onChangeMyInput}
          value={restaraunt.rule_table}
        />
        <br />
        <TextField
          required
          name="max_predict_time"
          label="최대 예상 도착 시간"
          variant="filled"
          onChange={onChangeMyInput}
          value={restaraunt.max_predict_time}
        />
        <br />
        <Button variant="filled" href="#outlined-buttons">
          <Link to="/user">나가기</Link>
        </Button>
        <Button variant="filled" onClick={rstApplyHandler}>
          제출
        </Button>
      </Box>
    </>
  );
};

export default RstApply;

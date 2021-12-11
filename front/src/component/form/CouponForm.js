import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const CouponForm = (props) => {
  const [coupon, setCoupon] = useState({
    rst_num: props.rst_num,
    coupon_name: "",
    sale_ratio: "",
    coupon_kind: "",
    use_possible_time: "",
    use_possible_man: "",
  });

  const onChangeMyInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCoupon((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        variant="filled"
      >
        <h1>쿠폰 만들기</h1>
        <hr />
        <br />
        <label>쿠폰 이름</label>
        <TextField
          required
          name="coupon_name"
          label="쿠폰 이름"
          variant="filled"
          onChange={onChangeMyInput}
          value={coupon.coupon_name}
        />
        <br />
        <label>할인률</label>
        <TextField
          required
          name="sale_ratio"
          label="할인률"
          variant="filled"
          onChange={onChangeMyInput}
          value={coupon.sale_ratio}
        />
        <br />
        <label>쿠폰 종류</label>
        <TextField
          required
          name="coupon_kind"
          label="쿠폰 종류"
          variant="filled"
          onChange={onChangeMyInput}
          value={coupon.coupon_kind}
        />
        <br />
        <label>쿠폰 사용가능 시간</label>
        <TextField
          required
          name="use_possible_time"
          label="쿠폰 사용가능 시간"
          variant="filled"
          onChange={onChangeMyInput}
          value={coupon.use_possible_time}
        />
        <br />
        <label>쿠폰 발급 인원</label>
        <TextField
          required
          name="use_possible_man"
          label="쿠폰 발급 인원"
          variant="filled"
          onChange={onChangeMyInput}
          value={coupon.use_possible_man}
        />
        <br />
        <Button type="submit">제출하기</Button>
      </Box>
    </div>
  );
};

export default CouponForm;

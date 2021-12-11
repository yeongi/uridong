import { Button, Rating, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import RstApi from "../../api/Restaraunt";

const Review = (props) => {
  const [rating, setRating] = useState(3);
  const [content, setContent] = useState("");

  const addMyReview = async (e) => {
    e.preventDefault();

    const result = await RstApi.postRsvReview({
      member_num: props.membernum,
      rst_num: props.rstnum,
      rating: rating,
      content: content,
    });
    const data = await result.json();

    console.log("리뷰 작성", data);
    if (data.status === 200) {
      props.statusHadler();
      alert("리뷰 작성");
    }
  };

  return (
    <div>
      <h1>리뷰 작성 하기</h1>
      <hr />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        variant="filled"
        onSubmit={addMyReview}
      >
        <label>별점 주기</label>
        <br />
        <Rating
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
          onChange={(e) => {
            setRating(e.target.defaultValue);
          }}
          value={rating}
          required
        />
        <hr />
        <br />
        <label>한 줄 평</label>
        <br />
        <TextField
          required
          name="review"
          label="한줄평"
          variant="filled"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
        />
        <br />
        <hr />
        <br />
        <Button type="submit">제출하기</Button>
      </Box>
    </div>
  );
};

export default Review;

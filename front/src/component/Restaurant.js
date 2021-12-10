import { useNavigate } from "react-router";
import classes from "../style/rst.module.css";
import thum from "../img/restaraunt.jpg";

const Restaurant = (props) => {
  const nav = useNavigate();

  return (
    <>
      <section
        className={classes["rests-wrapper"]}
        onClick={(e) => {
          nav("/restaraunt/1");
        }}
      >
        <article>
          <img src={thum} alt="" />
        </article>
        <article>
          <h3>{props.rst_name}</h3>
          <p>전체 식탁 수 : {props.table_count}</p>
          <p>현제 사용 식탁 수 : {props.use_table}</p>
          <p>예약 식탁 수 : {props.rsv_count}</p>
          <p>리뷰 수 : {props.review_count}</p>
          <p>평점 : {props.rating}</p>
        </article>
      </section>
    </>
  );
};

export default Restaurant;

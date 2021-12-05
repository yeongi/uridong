import classes from "../style/rst.module.css";

const Restaurant = () => {
  return (
    <>
      <section className={classes["res-wrapper"]}>
        <article>식당 사진</article>
        <article>
          <h3>식당이름</h3>
          <p>식탁 수</p>
          <p>리뷰수</p>
          <p>별점</p>
        </article>
      </section>
    </>
  );
};

export default Restaurant;

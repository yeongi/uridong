import classes from "../style/rst.module.css";
import { Button } from "@mui/material";

const RstDetail = () => {
  return (
    <>
      <h1>식당 상세 페이지</h1>
      <div>
        <header>
          <article className={classes["rst-detail-header"]}>
            <div className={classes.item}>식당사진</div>
            <div className={classes.item}>지도 사진</div>
            <div className={classes.item}>
              <Button variant="outlined" size="large">
                즐겨찾기
              </Button>
              <br />
              <Button variant="outlined" size="large">
                쿠폰보유
              </Button>
              <br />
              <Button variant="outlined" size="large">
                예약하기
              </Button>
            </div>
          </article>
          <article>
            <h1>우리 식당 A</h1>
          </article>
        </header>
        <body>
          <section>
            <article>
              <nav className={classes["rst-nav-wrapper"]}>
                <ul>
                  <h2>식당 정보</h2>
                </ul>
                <ul>
                  <h2>식탁 현황</h2>
                </ul>
                <ul>
                  <h2>리뷰</h2>
                </ul>
              </nav>
            </article>
            <article>
              <div>
                <h1>식당 정보</h1>
              </div>
              <div>
                <h1>식당 현황</h1>
              </div>
              <div>
                <h1>리뷰</h1>
              </div>
            </article>
          </section>
        </body>
      </div>
    </>
  );
};

export default RstDetail;

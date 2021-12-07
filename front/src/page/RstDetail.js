import classes from "../style/rst.module.css";
import { Button } from "@mui/material";
import BoxModal from "../lib/BasicModal";

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
              <Button variant="outlined" size="small">
                즐겨찾기
              </Button>
              <br />
              <BoxModal btn_name="쿠폰보유" title="쿠폰 보유 목록" />
              <br />
              <BoxModal btn_name="예약하기" title="예약 신청서">
                <h1>예약 신청서</h1>
              </BoxModal>
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

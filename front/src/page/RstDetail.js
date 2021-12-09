import classes from "../style/rst.module.css";
import { Button } from "@mui/material";
import BoxModal from "../lib/BasicModal";
import HavigCoupon from "../component/HavingCoupon";
import ApplyRsv from "../component/ApplyRsv";
import { useParams } from "react-router";
import thum from "../img/restaraunt.jpg";
import map from "../img/map.jpg";

const RstDetail = () => {
  //param 1을 사용해서 통신
  let { rstnum } = useParams();
  console.log(useParams());

  return (
    <>
      <h1>{rstnum}</h1>
      <div>
        <header>
          <article className={classes["rst-detail-header"]}>
            <div className={classes.item}>
              <img alt="" src={thum} />
            </div>
            <div className={classes.item}>
              <img alt="" src={map} />
            </div>
            <div className={classes.item}>
              <Button variant="outlined" size="small">
                즐겨찾기 추가하기
              </Button>
              <br />
              <BoxModal btn_name="쿠폰보유">
                <HavigCoupon rstnum={rstnum} />
              </BoxModal>
              <br />
              <BoxModal btn_name="예약하기">
                <ApplyRsv rstnum={rstnum} />
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

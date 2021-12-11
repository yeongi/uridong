import classes from "../style/rst.module.css";
import { Button } from "@mui/material";
import BoxModal from "../lib/BasicModal";
import ApplyRsv from "../component/ApplyRsv";
import { useParams } from "react-router";
import thum from "../img/restaraunt.jpg";
import map from "../img/map.jpg";
import RstApi from "../api/Restaraunt";
import { useCallback, useState, useEffect, useContext } from "react";
import CpApi from "../api/Coupon";
import FavApi from "../api/Fav";
import MemberCtx from "../store/memberContext";
import CpList from "../component/Cplist";

const RstDetail = () => {
  let { rstnum } = useParams();
  const memberCtx = useContext(MemberCtx);

  const [isLoading, setLoading] = useState(false);
  const [rstDetail, setRst] = useState([]);
  const [myCpList, setList] = useState([]);

  const getMyCp = useCallback(async () => {
    const result = await CpApi.getMyRstCouponList(memberCtx.member.num, rstnum);
    const data = await result.json();
    console.log(data);
    setList(data.data);
  }, [myCpList, isLoading]);

  const getRstDetail = useCallback(async () => {
    const result = await RstApi.getRstDetail(rstnum);
    const data = await result.json();
    setRst(data.data[0]);
  }, [rstDetail, isLoading]);

  useEffect(() => {
    getRstDetail();
    getMyCp();
    setLoading(true);
    //eslint-disable-next-line
  }, []);

  const addRst = useCallback(async () => {
    const result = await FavApi.addFavRst(memberCtx.member.num, rstnum);
    const data = await result.json();
    console.log(data);
  }, [isLoading]);

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
              {isLoading && (
                <>
                  <Button variant="outlined" size="small" onClick={addRst}>
                    즐겨찾기 추가하기
                  </Button>
                  <br />
                  <BoxModal btn_name="쿠폰보유">
                    <>
                      {memberCtx.isLoggedIn && (
                        <>
                          <h3>쿠폰 보유 목록 표시</h3>
                          <p>회원번호 : {memberCtx.member.num}</p>
                          <p>식당번호 : {rstnum}</p>
                          <hr />
                          {myCpList.map((item) => {
                            return (
                              <CpList
                                key={item.coupon_num}
                                coupon_name={item.coupon_name}
                                print_attime={item.print_attime}
                                end_attime={item.end_attime}
                              />
                            );
                          })}
                        </>
                      )}
                      {!memberCtx.isLoggedIn && (
                        <>
                          <h1>로그인을 안했습니다.</h1>
                        </>
                      )}
                    </>
                  </BoxModal>
                  <br />
                  <BoxModal btn_name="예약하기">
                    <ApplyRsv rstnum={rstnum} />
                  </BoxModal>
                </>
              )}
            </div>
          </article>
          <article>
            <h1>{isLoading && <>{rstDetail.rst_name}</>}</h1>
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
                <h1>식당 현황</h1>
                {isLoading && (
                  <>
                    <p>전체 식탁 수 : {rstDetail.all_table_each}</p>
                    <p>예약 식탁 수 : {rstDetail.rsv_table}</p>
                    <p>사용중인 식탁 수 : {rstDetail.use_table}</p>
                  </>
                )}
              </div>
              <div>
                {isLoading && (
                  <>
                    <h1>식당 정보</h1>
                    <p>식당 이름 : {rstDetail.rst_name}</p>
                    <p>카테고리 : {rstDetail.category}</p>
                    <p>식당 주소 : {rstDetail.rst_address}</p>
                    <p>식당 전화번호 : {rstDetail.rst_call_num}</p>
                    <p>식당등급 : {rstDetail.rst_grade}</p>
                    <p>식당 등록일자 : {rstDetail.rst_regist_date}</p>
                    <p>
                      예약 가능 기준 식탁 수 :
                      {rstDetail.rsv_rule_now_table_each}
                    </p>
                    <p>
                      예약 가능 기준 예상 도착 시간 :{" "}
                      {rstDetail.max_predict_time} 분 이하 도착
                    </p>
                    <p>
                      단골 기준 조건 : 예약 이행 {rstDetail.patron_rule}회 이상
                    </p>
                    <p>
                      단골 유지 조건 : 최근 2달간 쿠폰 사용
                      {rstDetail.patron_maintain} 회 이상
                    </p>
                  </>
                )}
              </div>

              <div>
                <h1>리뷰</h1>
                {isLoading && (
                  <>
                    <p>리뷰수 : {rstDetail.review_each}</p>
                    <p>별점 : {rstDetail.rst_star}</p>
                  </>
                )}
              </div>
            </article>
          </section>
        </body>
      </div>
    </>
  );
};

export default RstDetail;

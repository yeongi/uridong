import classes from "../style/rst.module.css";
import { Button } from "@mui/material";
import BoxModal from "../lib/BasicModal";
import ApplyRsv from "../component/form/ApplyRsv";
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
                    ???????????? ????????????
                  </Button>
                  <br />
                  <BoxModal btn_name="????????????">
                    <>
                      {memberCtx.isLoggedIn && (
                        <>
                          <h3>?????? ?????? ?????? ??????</h3>
                          <p>???????????? : {memberCtx.member.num}</p>
                          <p>???????????? : {rstnum}</p>
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
                          <h1>???????????? ???????????????.</h1>
                        </>
                      )}
                    </>
                  </BoxModal>
                  <br />
                  <BoxModal btn_name="????????????">
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
                  <h2>?????? ??????</h2>
                </ul>
                <ul>
                  <h2>?????? ??????</h2>
                </ul>
                <ul>
                  <h2>??????</h2>
                </ul>
              </nav>
            </article>
            <article>
              <div>
                <h1>?????? ??????</h1>
                {isLoading && (
                  <>
                    <p>?????? ?????? ??? : {rstDetail.all_table_each}</p>
                    <p>?????? ?????? ??? : {rstDetail.rsv_table}</p>
                    <p>???????????? ?????? ??? : {rstDetail.use_table}</p>
                  </>
                )}
              </div>
              <div>
                {isLoading && (
                  <>
                    <h1>?????? ??????</h1>
                    <p>?????? ?????? : {rstDetail.rst_name}</p>
                    <p>???????????? : {rstDetail.category}</p>
                    <p>?????? ?????? : {rstDetail.rst_address}</p>
                    <p>?????? ???????????? : {rstDetail.rst_call_num}</p>
                    <p>???????????? : {rstDetail.rst_grade}</p>
                    <p>?????? ???????????? : {rstDetail.rst_regist_date}</p>
                    <p>
                      ?????? ?????? ?????? ?????? ??? :
                      {rstDetail.rsv_rule_now_table_each}
                    </p>
                    <p>
                      ?????? ?????? ?????? ?????? ?????? ?????? :{" "}
                      {rstDetail.max_predict_time} ??? ?????? ??????
                    </p>
                    <p>
                      ?????? ?????? ?????? : ?????? ?????? {rstDetail.patron_rule}??? ??????
                    </p>
                    <p>
                      ?????? ?????? ?????? : ?????? 2?????? ?????? ??????
                      {rstDetail.patron_maintain} ??? ??????
                    </p>
                  </>
                )}
              </div>

              <div>
                <h1>??????</h1>
                {isLoading && (
                  <>
                    <p>????????? : {rstDetail.review_each}</p>
                    <p>?????? : {rstDetail.rst_star}</p>
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

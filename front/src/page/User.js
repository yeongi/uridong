import { Link, Outlet } from "react-router-dom";
import UserAccount from "../component/user/UserAccount";
import UserFav from "../component/user/UserFav";
import UserPlay from "../component/user/UserPlay";
import UserRst from "../component/user/UserRst";
import UserCoupon from "../component/user/UserCoupon";
import classes from "../style/layout.module.css";
import AdApi from "../api/Ad";
import { useEffect } from "react";
import UserRsv from "../component/user/UserRsv";

const User = () => {
  return (
    <>
      <h1>회원정보</h1>
      <hr />
      <Link to="apply">식당 등록하기 </Link>
      <Outlet />
      <hr />
      <section className={classes["users-wrapper"]}>
        <article>
          <UserAccount />
        </article>
        <hr />
        <article>
          <UserFav />
        </article>
        <article>
          <UserPlay />
        </article>
        <hr />
        <article>
          <UserCoupon />
        </article>
        <article>
          <UserRst />
        </article>
        <hr />
        <article>
          <UserRsv />
        </article>
      </section>
      <hr />
    </>
  );
};

export default User;

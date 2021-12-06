import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <>
      <h1>회원정보</h1>
      <Link to="apply">식당 등록하기 </Link>
      <section>
        <article>회원활동 내역</article>

        <article>계정정보</article>

        <article>즐겨찾기</article>

        <article>보유쿠폰</article>

        <article>등록한 식당</article>

        <article>빈페이지</article>
      </section>
      <Outlet />
    </>
  );
};

export default User;

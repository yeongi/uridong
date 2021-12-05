import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <>
      <h1>회원정보</h1>
      <Link to="apply">식당 등록하기 </Link>
      <Outlet />
    </>
  );
};

export default User;

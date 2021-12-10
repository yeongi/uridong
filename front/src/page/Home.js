import { useContext } from "react";
import CurArea from "../component/CurArea";
import Favorite from "../component/Favorite";
import LikeArea from "../component/LikeArea";
import Header from "../layout/Header";
import MemberCtx from "../store/memberContext";

const Home = () => {
  const memberCtx = useContext(MemberCtx);

  return (
    <>
      <h1>메인 페이지</h1>
      <Header />
      {memberCtx.isLoggedIn && (
        <>
          <Favorite />
          <LikeArea />
        </>
      )}
      <CurArea />
    </>
  );
};

export default Home;

import CurArea from "../component/CurArea";
import Favorite from "../component/Favorite";
import LikeArea from "../component/LikeArea";
import Restaurant from "../component/Restaurant";
import Header from "../layout/Header";

const Home = () => {
  return (
    <>
      <h1>메인 홈페이지</h1>
      <Header />
      <CurArea />
      <LikeArea />
      <Favorite />
    </>
  );
};

export default Home;

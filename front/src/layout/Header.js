import classes from "../style/layout.module.css";

const Header = () => {
  return (
    <div className={classes["header-wrapper"]}>
      <div className={classes["header-login"]}>
        <p>로그인</p>
        <p>회원가입</p>
      </div>
      <div className={classes["header-search"]}>
        <p>식탁 비율</p>
        <p> 카테 고리 </p>
        <input type="text" value="검색" />
        <p> 검색</p>
      </div>
    </div>
  );
};

export default Header;

import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "../style/layout.module.css";

const Header = () => {
  return (
    <div className={classes["header-wrapper"]}>
      <div className={classes["header-login"]}>
        <Button variant="contained">
          <Link to="/login">로그인</Link>
        </Button>
        <Button variant="contained">
          <Link to="/signup">회원가입</Link>
        </Button>
      </div>
      <div className={classes["header-search"]}>
        <div className={classes.item}>
          <p> 식탁 비율 </p>
          <p> 카테 고리 </p>
        </div>
        <div className={classes.item}>
          <TextField
            label="식당 검색"
            id="restaraunt_search"
            defaultValue="검색"
            size="small"
          />
          <Button variant="contained">검색</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import MemberCtx from "../store/memberContext";
import { useNavigate } from "react-router-dom";
import classes from "../style/layout.module.css";
import Notification from "../component/user/Notification";

const Header = () => {
  const memberCtx = useContext(MemberCtx);
  const navigate = useNavigate();
  const [openModal, setOpen] = useState(false);
  console.log(memberCtx);

  return (
    <div className={classes["header-wrapper"]}>
      <div className={classes["header-login"]}>
        {openModal && <Notification />}
        {memberCtx.isLoggedIn ? (
          <>
            <Button
              variant="contained"
              onClick={(e) => {
                if (!openModal) {
                  setOpen(true);
                } else {
                  setOpen(false);
                }
              }}
            >
              알림
            </Button>
            <Button
              variant="contained"
              onClick={(e) => {
                navigate("/user");
              }}
            >
              마이 페이지
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            onClick={(e) => {
              navigate("/login");
            }}
          >
            로그인
          </Button>
        )}

        {memberCtx.isLoggedIn ? (
          <Button
            variant="contained"
            onClick={(e) => {
              memberCtx.onLogOut();
              alert("로그아웃 됐습니다.");
              navigate("/");
            }}
          >
            로그아웃
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={(e) => {
              navigate("/signup");
            }}
          >
            회원가입
          </Button>
        )}
      </div>
      <div className={classes["header-search"]}>
        <div className={classes.item}>
          <p>식탁 비율</p>
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

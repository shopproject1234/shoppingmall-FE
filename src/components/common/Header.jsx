import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const nav = useNavigate();

  const userInfo = useSelector((state) => state.user.userInfo);

  return (
    <div className="Header">
      <div
        className="logo"
        onClick={() => {
          nav("/");
        }}
      >
        Shopping Mall
      </div>
    </div>
  );
};

export default Header;

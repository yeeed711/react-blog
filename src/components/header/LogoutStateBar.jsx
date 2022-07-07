import LoginBtn from "./LoginBtn";
import LogoImg from "./Logo";
import RegisterBtn from "./RegisterBtn";
import NoImg from "../../assets/noimg.svg";

function LogoutStateBar({ logout }) {
  return (
    <>
      <LogoImg />
      <ul>
        <li className="profile-img">
          <a href="#none">
            <img src={NoImg} alt="" />
          </a>
        </li>
        <li>
          <RegisterBtn />
        </li>
        <li>
          <LoginBtn logout={logout} />
        </li>
      </ul>
    </>
  );
}

export default LogoutStateBar;

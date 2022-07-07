import LogoImg from "./Logo";
import LogoutBtn from "./LogoutBtn";
import ProfileImg from "./ProfileImg";
import WriteBtn from "./WriteBtn";

function LoginStateBar({ login }) {
  return (
    <>
      <LogoImg />
      <ul>
        <li className="profile-img">
          <a href="#none">
            <ProfileImg alt="My Page" />
          </a>
        </li>
        <li>
          <WriteBtn />
        </li>
        <li>
          <LogoutBtn login={login} />
        </li>
      </ul>
    </>
  );
}

export default LoginStateBar;

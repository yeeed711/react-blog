import { useState } from "react";
import LoginStateBar from "./LoginStateBar";
import LogoutStateBar from "./LogoutStateBar";
import "./header.css";

function Header() {
  const [isUserState, setIsUserState] = useState(false);
  const HandleOnLogin = () => {
    setIsUserState(!isUserState);
  };
  // 자바스크립트 문법으로 if문 작성...
  //
  return (
    <header>
      <div className="max-width">
        {isUserState ? (
          <LoginStateBar login={HandleOnLogin} />
        ) : (
          <LogoutStateBar logout={HandleOnLogin} />
        )}
      </div>
    </header>
  );
}

export default Header;

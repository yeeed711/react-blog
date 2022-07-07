import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

const LogoImg = () => {
  return (
    <h1>
      <Link to="/">
        <img src={Logo} alt="My Blog" />
      </Link>
    </h1>
  );
};

export default LogoImg;

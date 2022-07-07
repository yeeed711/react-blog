import LogoutIcon from "../../assets/icon-logout.svg";
import "./logoutbtn.css";

function LogoutBtn(props) {
  return (
    <button className="button white" onClick={props.login}>
      <img src={LogoutIcon} alt="" />
      <span>Logout</span>
    </button>
  );
}

export default LogoutBtn;

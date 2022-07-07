import ModifyIcon from "../../assets/icon-modify-white.svg";

function WriteBtn() {
  return (
    <a href="#none" className="button">
      <img src={ModifyIcon} alt="" />
      <span>Write</span>
    </a>
  );
}

export default WriteBtn;

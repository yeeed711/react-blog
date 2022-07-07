import LoginImg from "../../assets/icon-login.svg";
import React from "react";

export default function LoginBtn(props) {
  return (
    <a href="#none" class="button gray" onClick={props.logout}>
      <img src={LoginImg} alt="" />
      <span>Login</span>
    </a>
  );
}

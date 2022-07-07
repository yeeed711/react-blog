import RegisterImg from "../../assets/icon-register.svg";
import React from "react";
import "./registerbtn.css";

export default function RegisterBtn() {
  return (
    <a href="#none" class="button gray">
      <img src={RegisterImg} alt="" />
      <span>Register</span>
    </a>
  );
}

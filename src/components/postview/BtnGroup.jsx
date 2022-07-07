import React from "react";
import ModifyBtn from "./ModifyBtn";
import DeleteBtn from "./DeleteBtn";
import "./btngroup.css";

export default function BtnGroup() {
  return (
    <div class="btn-group">
      <ModifyBtn />
      <DeleteBtn />
    </div>
  );
}

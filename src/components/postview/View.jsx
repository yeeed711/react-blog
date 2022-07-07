import React from "react";
import Category from "../main/Category";
import ViewAuthor from "./ViewAuthor";
import ViewTitle from "./ViewTitle";
import ViewContents from "./ViewContents";
import BackBtn from "./BackBtn";
import BtnGroup from "./BtnGroup";
import "./view.css";

function View() {
  return (
    <div class="view">
      <div class="max-width">
        <section class="wrap-box">
          <div class="inner">
            <ViewAuthor />
            <Category />
            <ViewTitle />
            <hr />
            <ViewContents />
            <BtnGroup />
            <BackBtn />
          </div>
        </section>
      </div>
    </div>
  );
}

export default View;

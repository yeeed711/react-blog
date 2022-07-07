import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <div
      class="banner"
      style={{ backgroundImage: "url(/assets/post-background6.jpg)" }}
    >
      <div class="max-width">
        <div class="banner-contents">
          <p class="today">
            May <em>25</em> Wednesday
          </p>
        </div>
      </div>
    </div>
  );
}

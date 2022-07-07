import { Link } from "react-router-dom";
import "./backbtn.css";

function BackBtn() {
  return (
    <Link to="/" class="btn-back">
      <span class="ir">Back</span>
    </Link>
  );
}

export default BackBtn;

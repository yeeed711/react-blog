import GithubImg from "./GithubImg";
import InstagramImg from "./InstagramImg";
import FacebookImg from "./FacebookImg";
import TwitterImg from "./TwitterImg";
import "./snslist.css";

function SnsList() {
  return (
    <ul class="sns">
      <li>
        <a href="#none">
          <FacebookImg />
        </a>
      </li>
      <li>
        <a href="#none">
          <TwitterImg />
        </a>
      </li>
      <li>
        <a href="#none">
          <InstagramImg />
        </a>
      </li>
      <li>
        <a href="#none">
          <GithubImg />
        </a>
      </li>
    </ul>
  );
}

export default SnsList;

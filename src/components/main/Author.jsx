import ProfileImg from "../header/ProfileImg";
import "./author.css";

function Author({ userName, created }) {
  return (
    <dl className="author-wrap">
      <dt className="ir">Author</dt>
      <dd className="author">
        <ProfileImg />
        {userName}
      </dd>
      <dt className="ir">Created</dt>
      <dd className="created">{created}</dd>
    </dl>
  );
}

export default Author;

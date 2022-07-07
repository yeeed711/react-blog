import ProfileImg from "../header/ProfileImg";
import "./viewauthor.css";

function ViewAuthor() {
  return (
    <dl class="author-wrap">
      <dt class="ir">Author</dt>
      <dd class="author">
        <ProfileImg /> Chilli
      </dd>
      <dt class="ir">Created</dt>
      <dd class="created">2022.05.25</dd>
    </dl>
  );
}

export default ViewAuthor;

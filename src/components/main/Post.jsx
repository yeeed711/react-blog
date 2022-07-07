import "./post.css";
import Posts from "./Posts";

function Post({ posts }) {
  return (
    <>
      <h2 className="ir">Post</h2>
      <Posts posts={posts} />
    </>
  );
}

export default Post;

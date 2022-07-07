import Post from "./Post";
import About from "./About";
import "./main.css";
import Banner from "../banner/Banner";

function Main({ posts, users }) {
  return (
    <>
      <Banner />
      <main>
        <div className="max-width">
          <Post posts={posts} />
          <About users={users} />
        </div>
      </main>
    </>
  );
}

export default Main;

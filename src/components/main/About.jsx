import ProfileImg from "../header/ProfileImg";
import Categories from "./Categories";
import SnsList from "./SnsList";
import "./about.css";

function About({ users }) {
  const user = users[0];

  return (
    <aside className="about">
      <h2>About Me</h2>
      <ProfileImg className="user-profile" />
      <p className="user-name">{user.name}</p>
      <p className="user-description">{user.userInfo}</p>
      <h3>Categories</h3>
      <Categories category={user.category} />
      <h3>Follow</h3>
      <SnsList />
    </aside>
  );
}

export default About;

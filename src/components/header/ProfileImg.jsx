import profile from "../../assets/profile.jpg";

const ProfileImg = (props) => {
  return <img src={profile} alt={props.alt} className={props.className} />;
};

export default ProfileImg;

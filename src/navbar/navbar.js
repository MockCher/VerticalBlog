import { SocialIcon } from "./socialicon";
import "./../styles.css";
export const Nav = ({ title, children }) => {
  return (
    <div className="nav-bar">
      <h2 style={{ color: "#fff", flex: 2, margin: 15 }}>
        <strong>{title}</strong>
      </h2>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly"
        }}
      >
        <SocialIcon
          label="Github"
          image="https://img.icons8.com/ios-filled/2x/github.png"
        />
        <SocialIcon
          label="Instagram"
          image="https://www.freepngimg.com/download/logo/62372-computer-neon-instagram-icons-hd-image-free-png.png"
        />
        <SocialIcon
          label="Twitter"
          image="https://clipartcraft.com/images/twitter-transparent-logo-social-media.png"
        />
        <SocialIcon label="About Me" image="./me.png" />
      </div>
    </div>
  );
};

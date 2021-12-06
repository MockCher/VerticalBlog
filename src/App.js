import { useState } from "react";
import "./styles.css";
import posts from "./posts.json";
import { Nav } from "./navbar/navbar";

export default function App() {
  return (
    <div className="App" style={{ width: posts.posts.length + 1 * 100 + "%" }}>
      <Post
        key="about_me"
        title="About me"
        // title={<PlayfulTitle />}
        backgroundcolor="#6aa9c8"
        image="./me.png"
        // image="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        content={<AboutMePage />}
        imageStyles={{ backgroundSize: "contain" }}
      />
      {posts.posts.map((post) => (
        <Post
          key={post.title}
          title={post.title}
          backgroundcolor={post.colorscheme}
          image={post.image}
          content={post.content}
        />
      ))}
      <FloatingButton />
      <Nav title="FruitFreak" />
      <CarouselControlls />
    </div>
  );
}

const CarouselControlls = () => {
  return (
    <div className="container">
      <Indicator checked={false} />
      <Indicator checked={false} />
      <Indicator checked={true} />
      <Indicator checked={false} />
    </div>
  );
};

const Indicator = ({ checked }) => {
  // const [isChecked, setIsChecked] = useState(checked)

  return (
    <div
      style={{
        height: "1em",
        width: "1em",
        borderRadius: "25%",
        border: "2px solid #fff",
        backgroundColor: checked ? "#fff" : "transparent"
      }}
    ></div>
  );
};

const AboutMePage = () => {
  return (
    <div style={{ color: "#000", padding: "1em" }}>
      <h2 style={{ color: "#000", fontSize: "2em" }}>Hallöchen!</h2>
      <h2>
        I will be your companion on a journey from identifying your pain points
        all the way <br />
        to celebrating the deployment of your new, handcrafted solution.
      </h2>
      {/* <h2>Let's make your daily life better, step by step. </h2> */}
      {/* <h3>
        I'm developing Fullstack SaaS-Applications with Asp.net-Backend, <br />
        ReactJS-Frontend and React Native Mobile Applications.
      </h3> */}
    </div>
  );
};

const FloatingButton = ({ pos }) => {
  return (
    <div className="floating-button-container" style={{}}>
      <div className="floating-button">
        <p className="floating-button-icon"></p>
      </div>
    </div>
  );
};

const Post = ({ title, backgroundcolor, image, content, imageStyles }) => {
  return (
    <section style={{ backgroundColor: backgroundcolor }}>
      <div className="above-the-fold">
        {typeof title === "string" ? <h1>{title}</h1> : title}
        <h1 className="arrow-down">↓</h1>
      </div>
      <div className="content-card">
        <div
          style={Object.assign(
            { backgroundImage: `url(${image})` },
            imageStyles
          )}
          className="hero-image"
        ></div>
        <div>
          <h6 style={{ color: "#000" }}>{content}</h6>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "Javascript", emoji: "💻", color: "#f0db4f" },
  { skill: "HTML", emoji: "🌐", color: "#e44d26" },
  { skill: "CSS", emoji: "🎨", color: "#2965f1" },
  { skill: "React", emoji: "⚛️", color: "#61dafb" },
  { skill: "Node.js", emoji: "🌳", color: "#68a063" },
  { skill: "Figma/Canva", emoji: "🎨", color: "#ff7262" },
  { skill: "B2 English", emoji: "🗣️", color: "#4caf50" },
  { skill: "Self Learning", emoji: "📚", color: "#ffb74d" },
  { skill: "Good Communication Skills", emoji: "💬", color: "#03a9f4" },
];

const Avatar = () => {
  return (
    <div className="avatar-container">
      <img src="/foto perfil.jpeg" alt="Joaquin Del Vecchio pic" />
    </div>
  );
};

const Intro = () => {
  return (
    <div className="intro-container">
      <h1>Joaquin Del Vecchio</h1>
      <p>
        I am a software developer at EY with over 2 years of experience,
        specializing in web development. I have developed websites using
        JavaScript and automated tasks with Python. Passionate about blockchain
        and web 3.0, I stay up to date with the latest news and industry trends.
      </p>
    </div>
  );
};

const SkillList = ({ skills }) => {
  return (
    <ul className="skill-list">
      {skills.map((s, index) => (
        <Skill key={index} skill={s.skill} emoji={s.emoji} color={s.color} />
      ))}
    </ul>
  );
};

const Skill = ({ skill, emoji, color }) => {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      <span>{emoji}</span>
      <span>{skill}</span>
    </li>
  );
};

const App = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList skills={skills} />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

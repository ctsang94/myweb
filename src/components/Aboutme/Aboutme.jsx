import React from "react";
import pfp from "../../assets/image/pfp.jpg";
import "./Aboutme.scss";

function Aboutme() {
  return (
    <div className="card">
      <img className="avatar" src={pfp} />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
    </div>
  );
}

function Intro() {
  return (
    <>
      <h1 className="aboutme__title">Hi, I'm Kelvin</h1>
      <p>
        I am a seasoned tech professional with over 10 years of experience,
        transitioning from Desktop Support to Software Engineering. Passionate
        about building effective and reliable tools that make a difference!
      </p>
    </>
  );
}

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill skill='HTML+CSS' color='pink'/>
      <Skill skill='Javascript' color='blue'/>
      <Skill skill='React' color='red'/>
      <Skill skill='Node' color='purple'/>
      <Skill skill='Express' color='orange'/>
    </div>
  );
}

function Skill(props) {
  return <div className='skill' style={{backgroundColor:props.color}}>
    <span>{props.skill}</span>
  </div>
}

export default Aboutme;

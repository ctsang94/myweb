import React from "react";
import styles from "./Projects.module.css";
import Viberr from "../../assets/icontract2.png";
import Fitlift from '../../assets/Travelsite2.png'
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Viberr}
          link="https://icontract1.netlify.app/"
          h3="iContract"
          p="Home Renovation Platform"
        />
        <ProjectCard
          src={Fitlift}
          link="https://dashing-ganache-c8ecd1.netlify.app/"
          h3="Travel List"
          p="Travel List App"
        />
      </div>
    </section>
  );
}

export default Projects;

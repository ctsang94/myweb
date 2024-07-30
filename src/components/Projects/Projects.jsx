import React from "react";
import styles from "./Projects.module.css";
import Viberr from "../../assets/viberr.png";
import Fitlift from '../../assets/fitlift.png'
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Viberr}
          link="https://github.com/ctsang94"
          h3="Viberr"
          p="Home Renovation Platform"
        />
        <ProjectCard
          src={Fitlift}
          link="https://github.com/ctsang94"
          h3="Fitlift"
          p="Lifting App"
        />
      </div>
    </section>
  );
}

export default Projects;

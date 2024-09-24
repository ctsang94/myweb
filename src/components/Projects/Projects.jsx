import React from "react";
import styles from "./Projects.module.css";
import iContract from "../../assets/icontract2.png";
import TravelSite from '../../assets/Travelsite2.png'
import ProjectCard from "../../common/ProjectCard";
import BrainFlix from '../../assets/image/BrainFlix.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={iContract}
          link="https://icontract1.netlify.app/"
          h3="iContract"
          p="The i-Contract website offers a platform for managing and streamlining home renovation contract creation and management. It includes a login interface and sections for users to upload, edit, and sign contracts, making the process more efficient and organized."
        />
        <ProjectCard
          src={TravelSite}
          link="https://dashing-ganache-c8ecd1.netlify.app/"
          h3="Travel List"
          p="The website is a travel booking platform that encourages users to book vacations. It features recommendations for popular destinations like Hawaii, Iceland, and Greece. Users can explore options, view contact information, and learn about the site's operating hours. The frontend is probably developed with HTML, CSS, and JavaScript."
        />
        <ProjectCard
          src={BrainFlix}
          link="https://startling-eclair-df59af.netlify.app/"
          h3="BrainFlix"
          p="The BrainFlix website serves as a video platform where users can explore video content. It includes a list of videos on the homepage, video player functionality, and a detailed video description section, emulating a YouTube-style layout. Built with React for its dynamic UI. Backend is hosted for the generation of the API data."
        />
      </div>
    </section>
  );
}

export default Projects;

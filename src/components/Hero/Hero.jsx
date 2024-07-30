import styles from './Hero.module.css'
import heroImg from '../../assets/image/pfp.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import CV from '../../assets/CV.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt='Profile pic of Kelvin Tsang'/>
            <img className={styles.colorMode} src={themeIcon} onClick={toggleTheme}alt='Color mode icon' />
        </div>
        <div className={styles.info}>
            <h1>Kelvin <br/> Tsang </h1>
            <h2>Full-Stack Developer</h2>
            <span>
              <a href='https://www.linkedin.com/in/kelvincktsang' target='_blank'>
                <img src={linkedinIcon} alt='linkedin icon' />
               </a>
               <a href='https://github.com/ctsang94' target='_blank'>
                <img src={githubIcon} alt='linkedin icon' />
               </a>
            </span>
            <p className={styles.description}>
            I am a seasoned tech professional with over 10 years of experience, transitioning from Desktop Support to Software Engineering. Passionate about building effective and reliable tools that make a difference!
            </p>
            <a href={CV} download>
              <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero

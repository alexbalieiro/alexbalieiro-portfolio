import AboutMe from "../components/about-me";
import Home from "../components/home";
import MyProjetcs from "../components/my-projetcs";
import NavigationSwitcher from "../components/navigation-switcher";
import Skills from "../components/skills";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <main id="home" className={styles.main}>
        <Home />
        <nav className={styles.navbar}>
          <NavigationSwitcher />
        </nav>
      </main>
      <section id="aboutme">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="myprojetcs">
        <MyProjetcs />
      </section>
    </>
  );
}

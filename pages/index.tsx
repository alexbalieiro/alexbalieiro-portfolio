import MySelfie from "../components/my-selfie";
import NavigationSwitcher from "../components/navigation-switcher";
import SocialMedia from "../components/social-media";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <MySelfie />
      <h1 className={styles.title}>Alex Balieiro</h1>
      <h2 className={styles.subtitle}>Developer Frontend</h2>
      <div style={{ marginTop: "20px" }}>
        <SocialMedia />
      </div>
      <div style={{ marginTop: "20px" }}>
        <NavigationSwitcher />
      </div>
    </main>
  );
}

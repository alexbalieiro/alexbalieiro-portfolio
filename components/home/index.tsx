import MySelfie from "../../components/my-selfie";
import SocialMedia from "../../components/social-media";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <MySelfie />
      <div>
        <h1 className={styles.title}>Alex Balieiro</h1>
        <h2 className={styles.subtitle}>Frontend Developer</h2>
      </div>
      <div style={{ marginTop: "20px" }}>
        <SocialMedia />
      </div>
    </div>
  );
}

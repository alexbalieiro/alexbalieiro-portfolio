import styles from "./index.module.css";
import useContentful from "../../data/useContentful";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const { getPortfolio } = useContentful();
  const [data, setData] = useState();
  useEffect(() => {
    getPortfolio().then((res: any) => {
      const data = res[0].aboutme.content[0].content[0].value;
      setData(data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <p>{data}</p>
    </div>
  );
}

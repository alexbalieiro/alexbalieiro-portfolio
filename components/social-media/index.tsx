import Image from "next/image";
import github from "../../public/github.svg";
import linkedin from "../../public/linkedin.svg";
import style from "./index.module.css";
export default function SocialMedia() {
  return (
    <section className={style.container}>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/alex-balieiro"
        rel="noopener noreferrer"
        className={style.elementContainer}
      >
        <Image src={linkedin} alt={"LinkedIn"} width={40} height={40} />
        LinkedIn
      </a>

      <a
        target="_blank"
        href="https://github.com/alexbalieiro"
        rel="noopener noreferrer"
        className={style.elementContainer}
      >
        <Image src={github} alt={"GitHub"} width={40} height={40} />
        GitHub
      </a>
    </section>
  );
}

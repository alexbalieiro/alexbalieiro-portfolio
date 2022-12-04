import style from "./index.module.css";
export default function NavigationSwitcher() {
  return (
    <div className={style.container}>
      <button className={style.button}>Acerca de mi</button>
      <button className={style.button}>Skills</button>
      <button className={style.button}>Mis proyectos</button>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import style from "./index.module.css";

export default function NavigationSwitcher() {
  const menuItems = [
    { id: 1, name: "home", title: "Home" },
    { id: 2, name: "aboutme", title: "Acerca de mi" },
    { id: 3, name: "skills", title: "Skills" },
    { id: 4, name: "myprojetcs", title: "Mis proyectos" },
  ];
  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 560) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", setFixed);
  }, []);
  return (
    <div
      className={style.container}
      style={
        fix ? { position: "fixed", top: "16px", left: "0", right: "0" } : {}
      }
    >
      {menuItems.map((menu) => (
        <Link
          key={menu.id}
          className={style.button}
          activeClass={style.active}
          spy={true}
          to={menu.name}
          smooth={true}
          offset={-70}
        >
          {menu.title}
        </Link>
      ))}
    </div>
  );
}

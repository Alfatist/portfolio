import MenuLink from "../MenuLink";
import "./Menu.css";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const localizacao = useLocation();
  console.log(localizacao);
  return (
    <header>
      <nav className="navegacao">
        <MenuLink to="/">Inicio</MenuLink>
        <MenuLink to="/sobremim">Sobre Mim</MenuLink>
      </nav>
    </header>
  );
};

export default Menu;

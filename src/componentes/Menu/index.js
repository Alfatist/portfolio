import MenuLink from "../MenuLink";
import "./Menu.css";

const Menu = () => {
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

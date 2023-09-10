import "./Menu.css";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const localizacao = useLocation();
  console.log(localizacao);
  return (
    <header>
      <nav className="navegacao">
        <Link className="link" href="/">
          Início
        </Link>
        <Link className="link" href="/sobremim">
          Sobre Mim
        </Link>
      </nav>
    </header>
  );
};

export default Menu;

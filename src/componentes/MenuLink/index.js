import "./MenuLink.css";
import { NavLink } from "react-router-dom";

const MenuLink = (props) => {
  return (
    <NavLink className={({ isActive }) => `link ${isActive ? "linkDestacado" : ""}`} to={props.to} end>
      {props.children}
    </NavLink>
  );
};

export default MenuLink;

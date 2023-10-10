import { Link } from "react-router-dom";
import HeaderLink from "./headerLink";

import headerStyle from "./header.module.css";

import logo from "./logo.png";

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <Link to="./">
        <img src={logo} alt="logo do cinetag"></img>
      </Link>
      <nav>
        <HeaderLink url="./">Home</HeaderLink>
        <HeaderLink url="./favoritos">Favoritos</HeaderLink>
      </nav>
    </header>
  );
};

export default Header;

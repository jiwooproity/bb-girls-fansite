import { Link } from "react-router-dom";

import "./header.less";

import { menu } from "@/interface"; // 메뉴 목록

const Logo = () => {
  return (
    <h1 className="nav-logo">
      <Link to="/">BBGIRLS</Link>
    </h1>
  );
};

const Menu = () => {
  return (
    <ul className="nav-menu">
      {menu.map((item) => (
        <li key={item.id} className="nav-menu-item">
          <Link to={item.to}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

const Header = () => {
  return (
    <nav id="navbar" className="nav-container">
      <div className="nav-wrapper">
        <Logo />
        <Menu />
      </div>
    </nav>
  );
};

export default Header;

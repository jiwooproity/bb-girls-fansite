import "./header.less";

import { Link } from "react-router-dom";
import { menu } from "@/types/menu";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <h1 className="header-logo">BBGirls</h1>
        <div className="header-menu-box">
          <ul className="header-menu-box">
            {menu.map((item) => (
              <li className="header-menu-item">
                <Link to={item.id}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

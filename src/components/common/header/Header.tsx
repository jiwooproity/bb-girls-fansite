import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./header.less";

import { menu } from "@/interface"; // 메뉴 목록
import { Button } from "@/components/common";

const Logo = () => {
  return (
    <h1 className="nav-logo">
      <Link to="/">BBGIRLS</Link>
    </h1>
  );
};

const Menu = () => {
  const { t } = useTranslation();

  return (
    <ul className="nav-menu">
      {menu.map((item) => (
        <li key={item.id} className="nav-menu-item">
          <Link to={item.to}>{t(`${item.label}`)}</Link>
        </li>
      ))}
    </ul>
  );
};

const TranslationBtn = () => {
  const { i18n } = useTranslation();
  const { resources } = i18n.options;

  const onChangeLang = (e: { target: EventTarget }) => {
    const { value } = e.target as HTMLButtonElement;
    i18n.changeLanguage(value);
  };

  return (
    <div className="nav-translation-area">
      {Object.keys(resources).map((lang) => (
        <Button
          className="nav-translation-btn"
          value={lang}
          onClick={onChangeLang}
        >
          {lang}
        </Button>
      ))}
    </div>
  );
};

const Header = () => {
  return (
    <nav id="navbar" className="nav-container">
      <div className="nav-wrapper">
        <div className="nav-left-side">
          <Logo />
          <Menu />
        </div>
        <div className="nav-right-side">
          <TranslationBtn />
        </div>
      </div>
    </nav>
  );
};

export default Header;

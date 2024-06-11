'use client';

import './style/navigation.css';

import Image from 'next/image';
import Link from 'next/link';

import menu from './data/menu.json';
import useScroll from './lib/use-scroll';
import useToggleBtn from './lib/use-toggle-btn';

const Header = () => {
  const [headerRef] = useScroll();
  const [toggleRef, toggle] = useToggleBtn();

  return (
    <div id="header" className="header" ref={headerRef}>
      <nav id="nav" className="navigation">
        <h1 className="logo">
          <Image
            src="/svgs/logo.svg"
            width={94}
            height={30}
            priority
            alt="logo"
          />
        </h1>
        <ul className="nav-menu">
          {menu.map(item => (
            <li key={item.label} className="nav-menu-item">
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="login-wrapper">
          <button type="button">로그인</button>
        </div>
        <div className="mo-nav-menu">
          <button type="button" onClick={toggle}>
            <Image
              ref={toggleRef}
              src="/svgs/hamburger.svg"
              width={24}
              height={24}
              alt="mobile-menu"
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;

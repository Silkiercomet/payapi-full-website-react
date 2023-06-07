import {useState} from 'react';
import style from "./styles/nav.module.css";
import  Logo  from "../assets/shared/desktop/logo.svg";
import  Hamburguer  from "../assets/shared/mobile/menu.svg";
import { useNavigate } from 'react-router-dom';
import { handleRedirect } from '../utilities/utilities';
import MobileMenu from './MobileMenu';
import ScheduleBtn from './ScheduleBtn';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleNavigation = (page = 1) => {
    handleRedirect(page, navigate)
  }
  return (
    <nav className={style.navbar}>
      <div className={style.navbar__left}>
        <figure onClick={() => handleRedirect(1 , navigate)}>
          <img src={Logo} alt="payapi logo" />
        </figure>
        <ul className={style.navbar__left_desktop}>
          <li onClick={() => handleNavigation(2)}>About</li>
          <li onClick={() => handleNavigation(3)}>Pricing</li>
          <li onClick={() => handleNavigation(4)}>Contact</li>
        </ul>
      </div>
      <div className={style.navbar__right}>
        <figure className={style.navbar__right_mobile} onClick={toggleMenu}>
          <img src={Hamburguer} alt="mobile menu" />
        </figure>
        <div className={style.navbar__right_desktop}>
        <ScheduleBtn />
        </div>
      </div>
      {isMenuOpen && <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} handleNavigation={handleNavigation}/>}
    </nav>
  );
};

export default Navbar;

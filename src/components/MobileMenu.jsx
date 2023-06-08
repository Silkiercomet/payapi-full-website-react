import style from './styles/mobileMenu.module.css'; // CSS file for styling
import  Close  from "../assets/shared/mobile/close.svg";

const MobileMenu = ({isMenuOpen, toggleMenu = f => f, handleNavigation = f => f}) => {


  return (
    <>
      {/* Modal overlay */}
      {isMenuOpen && (
        <div className={style.modal_overlay} onClick={toggleMenu}>
          {/* Mobile menu content */}
          <div className={style.mobile_menu}>
            {/* Menu items */}
            <figure>
                <img src={Close} alt="close icon for mobile menu" />
            </figure>

            <ul>
              <li onClick={() => handleNavigation(1)}>Home</li>
              <li onClick={() => handleNavigation(3)}>Pricing</li>
              <li onClick={() => handleNavigation(2)}>About</li>
              <li onClick={() => handleNavigation(4)}>Contact</li>
              <li><button>Schedule a Demo</button></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
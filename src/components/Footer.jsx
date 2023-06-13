import ContactForm from "./ContactForm"
import style from "./styles/footer.module.css"
import logo from "../assets/shared/desktop/logo.svg"
import facebook from "../assets/shared/desktop/facebook.svg"
import twitter from "../assets/shared/desktop/twitter.svg"
import linkedin from "../assets/shared/desktop/linkedin.svg"
import { handleRedirect } from "../utilities/utilities"
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();
  const handleNavigation = (page = 1) => {
    handleRedirect(page, navigate)
  }
  return (
    <>
      <div className={style.banner}>
        <h4>
          Ready to start?
        </h4>
        <ContactForm />
      </div>
      <div className={style.wrapper}>
      <footer className={style.footer}>
              <figure onClick={() => handleRedirect(1 , navigate)}>
                <img src={logo} alt="logo svg" />
              </figure>
              <ul className={style.footer__nav}>
              <li onClick={() => handleNavigation(3)}>Pricing</li>
          <li onClick={() => handleNavigation(2)}>About</li>
          <li onClick={() => handleNavigation(4)}>Contact</li>
              </ul>
              <ul className={style.footer__social}>
                <li><i><img src={facebook} alt="facebook logo" /></i></li>
                <li><i><img src={twitter} alt="twitter logo" /></i></li>
                <li><i><img src={linkedin} alt="linkedin logo" /></i></li>
              </ul>
            </footer>
      </div>
    </>
  )
}

export default Footer
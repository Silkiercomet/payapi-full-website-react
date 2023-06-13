import ContactForm from "./ContactForm"
import style from "./styles/footer.module.css"
import logo from "../assets/shared/desktop/logo.svg"
import facebook from "../assets/shared/desktop/facebook.svg"
import twitter from "../assets/shared/desktop/twitter.svg"
import linkedin from "../assets/shared/desktop/linkedin.svg"
const Footer = () => {
  return (
    <>
      <div className={style.banner}>
        <h4>
          Ready to start
        </h4>
        <ContactForm />
      </div>
      <footer className={style.footer}>
        <figure>
          <img src={logo} alt="logo svg" />
        </figure>
        <ul className={style.footer__nav}>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className={style.footer__social}>
          <li><i><img src={facebook} alt="facebook logo" /></i></li>
          <li><i><img src={twitter} alt="twitter logo" /></i></li>
          <li><i><img src={linkedin} alt="linkedin logo" /></i></li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
import style from "../../styles/hero.module.css";
import Phone from "../../../assets/home/desktop/illustration-phone-mockup.svg"
import { Link } from 'react-router-dom';
import ContactForm from "../../ContactForm";

const Hero = () => {
  return (
    <section className={style.hero}>
      <figure><img src={Phone} alt="mobile phone image" /></figure>
      <div className={style.hero__content}>
        <h1>Start building with our APIs for absolutely free.</h1>
        <ContactForm />
        <p>Have any questions? <Link to="/contact">Contact Us</Link></p>
      </div>
    </section>
  )
}

export default Hero
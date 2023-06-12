import style from "../../styles/implement.module.css";
import easy from "../../../assets/home/desktop/illustration-easy-to-implement.svg"
import Ui from "../../../assets/home/desktop/illustration-simple-ui.svg"
const Implement = () => {
  return (
    <section className={style.implement}>
      <div className={style.implement__container1}>
        <figure>
          <img src={easy} alt="ilustration of implementation" />
        </figure>
        <div>
          <h3>Easy to implement</h3>
          <p>Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
        </div>
      </div>
      <div className={style.implement__container2}>
        <div>
          <header>Simple UI & UX</header>
          <p>Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.</p>
        </div>
        <figure>
          <img src={Ui} alt="ilustration of the user interface" />
        </figure>
      </div>
    </section>
  )
}

export default Implement
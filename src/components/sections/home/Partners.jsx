import PartnersDisplay from "../../PartnersDisplay";
import style from "../../styles/partners.module.css";

const Partners = () => {

  return (
    <div className={style.wrapper}>
      <section className={style.partners}>
      <PartnersDisplay />
      <div className={style.partners__content}>
        <h2>Who we work with</h2>
        <p>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.</p>
        <button>About Us</button>

      </div>

    </section>
    </div>
  )
}

export default Partners
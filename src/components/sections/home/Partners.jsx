import style from "../../styles/partners.module.css";
import tesla from "../../../assets/shared/desktop/tesla.svg"
import oracle from "../../../assets/shared/desktop/oracle.svg"
import google from "../../../assets/shared/desktop/google.svg"
import microsoft from "../../../assets/shared/desktop/microsoft.svg"
import hewlett_packard from "../../../assets/shared/desktop/hewlett-packard.svg"
import nvidia from "../../../assets/shared/desktop/nvidia.svg"
const Partners = () => {
  let arrOfPartners = [tesla, microsoft, hewlett_packard, oracle, google,nvidia]
  return (
    <div className={style.wrapper}>
      <section className={style.partners}>
      <div className={style.partners__grid}>
        {arrOfPartners.map((e,i) => <img src={e} key={i}></img>)}
      </div>
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
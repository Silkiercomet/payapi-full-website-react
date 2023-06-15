import style from "./styles/pricingcard.module.css"
import check from "../assets/shared/desktop/icon-check.svg"
const PricingCard = ({plan = "plan", details = "lorem ipsum", price = 120, perksAmount = 3}) => {
    const perksList = ["Transactions","Auth","Identity","Invesments","Assets","Liabilities","Income"]
  return (
    <div className={style.card}>
        <header className={style.card__header}>
            {plan}
        </header>
        <p>{details}</p>
        <p className={style.card__pricing}>${price}.00</p>
        <div>
        <ul>
            {perksList.map((e,i) => <li key={i}><i className={i < perksAmount ? style.card__list_show :style.card__list_hide}><img src={check} alt="checkmark icon" /></i>{e}</li>)}
        </ul>
        </div>
        <button className={style.card__btn}>Request Access</button>
    </div>
  )
}

export default PricingCard
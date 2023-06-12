import Card from "../../Card";
import style from "../../styles/perks.module.css";
import icon1 from "../../../assets/home/desktop/icon-personal-finances.svg"
import icon2 from "../../../assets/home/desktop/icon-banking-and-coverage.svg"
import icon3 from "../../../assets/home/desktop/icon-consumer-payments.svg"
const Perks = () => {
  return (
    <section className={style.perks}>
      <Card route={icon1} header={"Personal Finances"} content={"Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account."} />
      <Card route={icon2} header={"Banking & Coverage"} content={"With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts."} />
      <Card route={icon3} header={"Consumer Payments"} content={"It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account."} />
    </section>
  )
}

export default Perks
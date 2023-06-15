import style from "../../styles/about.module.css"

const Details = () => {
    const details = [
        {header:"Team Members" , number:"300+"},
        {header:"Offices in the US" , number:"3"},
        {header:"Transactions analyzed" , number:"10M+"}
]
  return (
    <div className={style.about__details}>
      {details.map((e,i) => <div className={style.about__details_card} key={i}>
        <p>{e.header}</p>
        <header>{e.number}</header>
      </div>)}
    </div>
  )
}

export default Details
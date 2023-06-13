import React from 'react'
import style from "./styles/perks.module.css";
const Card = ({route, header, content}) => {
  return (
    <div className={style.card}>
        <figure>
            <img src={route} alt={header} />
        </figure>
        <header>{header}</header>
        <p>{content}</p>
    </div>
  )
}

export default Card
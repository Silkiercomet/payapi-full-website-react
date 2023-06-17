import React from 'react'
import Form from '../../components/sections/contact/Form'
import style from "../../components/styles/contact.module.css"
import PartnersDisplay from '../../components/PartnersDisplay'
const Contact = () => {
  return (
    <section className={style.contact}>
      <h1>Submit a help request and we’ll get in touch shortly.</h1>
      <main>
      <Form />
        <div className={style.contact__content}>
          <header>Join the thousands of innovators already building with us</header>
          <PartnersDisplay />
        </div>
      </main>
    </section>
  )
}

export default Contact
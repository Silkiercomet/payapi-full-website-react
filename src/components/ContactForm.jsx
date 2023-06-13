import React from 'react'
import { useForm } from 'react-hook-form';
import style from "./styles/contactform.module.css"
import { useNavigate } from 'react-router-dom';
const ContactForm = () => {
  const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        console.log(data);
        navigate("/pricing")
      };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
       {errors.email && <span className='error'>Invalid email</span>}
       <div className={style.form__container}>
        <input type="text" placeholder='Enter Email Address' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        <button className={`btn ${style.btn__form}`}> Schedule a Demo </button>
       </div>
    </form>
  )
}

export default ContactForm
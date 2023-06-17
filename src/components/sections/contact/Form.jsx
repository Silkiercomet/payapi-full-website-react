import { useForm } from 'react-hook-form';
import InputHandler from './InputHandler';
import style from "../../styles/contact.module.css"
const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const formArr = [
    {  name : "Name",
    error : "Name must be between 2 and 30 characters",},
    {  name : "Email",
    pattern : /^\S+@\S+$/i,
    error : "please introduce a valid email address",},
    {  name : "Company",
    error : "Company name must not be empty"},
    {  name : "Title",
    error : "Title must be between 2 and 8"},
]
    const onSubmit = (data) => {
        console.log(data);
      };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.contact__form}>
        {formArr.map((e) => <InputHandler {...e} register={register} errors={errors}/>)}
        <div className={style.contact__form_message}>
        <label>Message</label>
        <textarea {...register('message', { required: true, minLength:5, maxLength:200 })} />
        {<p className={errors.message ? style.error__show : style.error__hide}>Message is required.</p>}
      </div>
        <div className={style.contact__form_check}>
        <input type="checkbox" {...register('stayUpdated')} id='stayUpdated'/>
        <label htmlFor="stayUpdated">Stay up-to-date with company announcements and updates to our API</label>
        </div>
        <button type="submit" className='btn'>Submit</button>
    </form>
  )
}

export default Form
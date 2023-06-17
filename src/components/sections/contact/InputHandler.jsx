import style from "../../styles/contact.module.css"
const InputHandler = ({
  register,
  name = "Text",
  isRequired = true,
  min = 2,
  max = 30,
  pattern = false,
  error = "please fix the error",
  errors
}) => {
  let setParameters = { required: isRequired, minLength: min, maxLength: max };
  if (pattern) {
    setParameters["pattern"] = pattern;
  }
  return (
    <>
      <label>{name}</label>
      <input {...register(name, { required: isRequired })} />
      {<p className={errors[`${name}`] ? style.error__show : style.error__hide}>{error}.</p>}
    </>
  );
};

export default InputHandler;

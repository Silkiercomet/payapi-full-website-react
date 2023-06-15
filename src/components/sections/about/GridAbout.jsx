import style from "../../styles/about.module.css"

const GridAbout = ({children}) => {
  return (
    <div className={style.grid}>{children}</div>
  )
}

export default GridAbout
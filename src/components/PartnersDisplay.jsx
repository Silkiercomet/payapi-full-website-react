import style from "./styles/partners.module.css";
import tesla from "../assets/shared/desktop/tesla.svg";
import oracle from "../assets/shared/desktop/oracle.svg";
import google from "../assets/shared/desktop/google.svg";
import microsoft from "../assets/shared/desktop/microsoft.svg";
import hewlett_packard from "../assets/shared/desktop/hewlett-packard.svg";
import nvidia from "../assets/shared/desktop/nvidia.svg";
const PartnersDisplay = () => {
  let arrOfPartners = [
    tesla,
    microsoft,
    hewlett_packard,
    oracle,
    google,
    nvidia,
  ];
  return (
    <div className={style.partners__grid}>
      {arrOfPartners.map((e, i) => (
        <img src={e} key={i}></img>
      ))}
    </div>
  );
};

export default PartnersDisplay;

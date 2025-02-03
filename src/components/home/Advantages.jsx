import React from "react";
import style from "./advantages.module.scss";
import shield from "../../assets/icons/home/Shield.svg";
import file from "../../assets/icons/home/File.svg";
import notes from "../../assets/icons/home/Notes.svg";
import hammer from "../../assets/icons/home/Hammer.svg";
import calendar from "../../assets/icons/home/Calendar.svg";
import like from "../../assets/icons/home/Like.svg";
import advImg from "../../assets/images/home/advantages-img.jpg";

const Advantages = () => {
  return (
    <section className={style.advantages}>
      <div className="container">
        <div className={style.advantages__wrapper}>
          <ul>
            {[
              {
                icon: shield,
                text: "Аккредитованный застройщик",
              },

              {
                icon: file,
                text: "Открытые и честные сметы",
              },

              {
                icon: notes,
                text: "Своевременная отчетность",
              },

              {
                icon: hammer,
                text: "Собственная бригада мастеров",
              },

              {
                icon: calendar,
                text: "Соблюдение сроков",
              },

              {
                icon: like,
                text: "Гарантия качества",
              },
            ].map(({ icon, text }) => (
              <li key={text}>
                <img src={icon} alt={text} />
                <p>{text}</p>
              </li>
            ))}
          </ul>

          <img src={advImg} alt="advantages img" />
        </div>
      </div>
    </section>
  );
};

export default Advantages;

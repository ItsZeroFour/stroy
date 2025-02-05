import React from "react";
import style from "./whywe.module.scss";
import whyweIcon1 from "../../assets/icons/home/why-we-icon-1.svg";
import whyweIcon2 from "../../assets/icons/home/why-we-icon-2.svg";
import whyweIcon3 from "../../assets/icons/home/why-we-icon-3.svg";
import whyweIcon4 from "../../assets/icons/home/why-we-icon-4.svg";
import whyweIcon5 from "../../assets/icons/home/why-we-icon-5.svg";
import whyweIcon6 from "../../assets/icons/home/why-we-icon-6.svg";

const WhyWe = () => {
  const list = [
    {
      icon: whyweIcon1,
      title: "Честные цены",
      text: "Мы гарантируем стабильность цены и предоставляем открытые и прозрачные сметы.",
    },

    {
      icon: whyweIcon2,
      title: "Соблюдение сроков",
      text: "Мы ценим ваше время, поэтому сдача проекта происходит с четким соблюдением дедлайнов.",
    },

    {
      icon: whyweIcon3,
      title: "Опытная команда",
      text: "В нашей команде работают специалисты с большим опытом работы.",
    },

    {
      icon: whyweIcon4,
      title: "Безопасная сделка",
      text: "Аккредитация в ведущих банках для обеспечения безопасной и выгодной сделки.",
    },

    {
      icon: whyweIcon5,
      title: "Надежность конструкции",
      text: "Мы используем только проверенные решения, гарантирующие безопасность вашего дома.",
    },

    {
      icon: whyweIcon6,
      title: "Видеонаблюдение",
      text: "Мы устанавливаем видеонаблюдение для контроля процесса строительства.",
    },
  ];

  return (
    <section className={style.whywe}>
      <div className="container">
        <div className={style.whywe__wrapper}>
          <div className={style.whywe__top}>
            <h2>ПОЧЕМУ МЫ</h2>
            <p>06</p>
          </div>

          <ul>
            {list.map(({ icon, title, text }) => (
              <li key={title}>
                <img src={icon} alt={title} />
                <h4>{title}</h4>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyWe;

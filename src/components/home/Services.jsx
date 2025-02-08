import React from "react";
import style from "./services.module.scss";
import housePlan from "../../assets/icons/home/house-plan.svg";
import tools from "../../assets/icons/home/tools.svg";
import plug from "../../assets/icons/home/plug.svg";
import tree from "../../assets/icons/home/tree.svg";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/icons/home/arrow-right-2.svg";

const Services = ({ setOpenModal, targetRef2 }) => {
  return (
    <section className={style.services} ref={targetRef2}>
      <div className="container">
        <div className={style.services__wrapper}>
          <div className={style.services__top}>
            <h2>УСЛУГИ</h2>
            <p>01</p>
          </div>

          <ul>
            {[
              {
                icon: housePlan,
                title: "Проектирование",
                text: "Создадим уникальный проект дома вашей мечты с учетом особенностей участка и ваших пожеланий",
              },

              {
                icon: tools,
                title: "Строительство",
                text: "Строим комфортный дом, обеспечивая контроль над процессами и сроками реализации объекта",
              },

              {
                icon: plug,
                title: "Инженерное оснащение",
                text: "Разрабатываем и интегрируем все инженерные системы дома в единую структуру под управлением умного дома",
              },

              {
                icon: tree,
                title: "Ландшафтный дизайн",
                text: "Продумываем декоративное озеленение, освещение, благоустройство дорожек и лаунж-зон",
              },
            ].map(({ icon, title, text }) => (
              <li key={title}>
                <img src={icon} alt={title} />
                <h4>{title}</h4>
                <p>{text}</p>
                <button onClick={() => setOpenModal(true)}>
                  Оставить заявку <img src={arrowRight} alt="arrow right" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;

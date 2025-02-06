import React from "react";
import style from "./head.module.scss";
import homeIcon from "../../assets/icons/carbon_home.svg";
import { Link } from "react-router-dom";
import { Motion, spring } from "react-motion";

const Head = () => {
  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <div className={style.head__wrapper__nav}>
            <ul>
              <li>
                <Link to="/">
                  <img src={homeIcon} alt="home" />
                  <p>Главная</p>
                </Link>
              </li>

              <li>
                <p>Каталог домов</p>
              </li>
            </ul>
          </div>

          <Motion
            defaultStyle={{ opacity: 0, y: -50 }}
            style={{ opacity: spring(1), y: spring(0) }}
          >
            {(style) => (
              <h1
                style={{
                  opacity: style.opacity,
                  transform: `translateY(${style.y}px)`,
                }}
              >
                каталог домов
              </h1>
            )}
          </Motion>

          <p>
            Выберите из нашего каталога проект, который вам больше всего
            подходит. Мы внесём необходимые правки и в ближайшее время начнем
            строительство вашего дома мечты.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Head;

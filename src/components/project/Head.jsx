import React from "react";
import style from "./head.module.scss";
import homeIcon from "../../assets/icons/carbon_home.svg";
import { Link } from "react-router-dom";
import { Motion, spring } from "react-motion";
import InputMask from "react-input-mask";
import arrowRight from "../../assets/icons/home/arrow-right.svg";

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
                <Link to="/">
                  <img src={homeIcon} alt="home" />
                  <p>Каталог домов</p>
                </Link>
              </li>

              <li>
                <p>Проект SD-1</p>
              </li>
            </ul>
          </div>

          <ol>
            <li>
              <p>Каменный дом</p>
            </li>

            <li>
              <p>101, 4 м2</p>
            </li>
          </ol>

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
                проект sd-1
              </h1>
            )}
          </Motion>

          <div className={style.home__form}>
            <form>
              <InputMask mask="+7 999 999 99 99" placeholder="Ваш телефон" />
              <input type="text" placeholder="Ваше имя" />
              <button>
                Обсудить проект <img src={arrowRight} alt="arrow right" />
              </button>
            </form>
          </div>

          <p>
            Нажимая кнопку “Обсудить проект”, вы соглашаетесь с{" "}
            <Link to="/">Политикой конфиденциальности</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Head;

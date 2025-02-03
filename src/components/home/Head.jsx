import React from "react";
import style from "./head.module.scss";
import locationIcon from "../../assets/icons/home/location.svg";
import arrowRight from "../../assets/icons/home/arrow-right.svg";
import playIcon from "../../assets/icons/home/play.svg";
import giftIcon from "../../assets/icons/home/gift.svg";
import { Link } from "react-router-dom";
import { Motion, spring } from "react-motion";

const Head = () => {
  return (
    <section className={style.home}>
      <div className="container">
        <div className={style.home__wrapper}>
          <div className={style.home__location}>
            <img src={locationIcon} alt="location" />
            <p>В РЕСПУБЛИКЕ ЧУВАШИЯ</p>
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
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Строительство каменных и каркасных домов по фиксированной цене
              </h1>
            )}
          </Motion>

          <div className={style.home__info}>
            <div className={style.home__info__wrapper}>
              <div className={style.home__form}>
                <form>
                  <input type="phone" placeholder="Ваш телефон" />
                  <input type="text" placeholder="Ваше имя" />
                  <button>
                    Обсудить проект <img src={arrowRight} alt="arrow right" />
                  </button>
                </form>
              </div>

              <div className={style.home__video}>
                <button>
                  <div className={style.home__video__button__container}>
                    <img src={playIcon} alt="play icon" />
                  </div>
                </button>

                <div className={style.home__video__text}>
                  <p>Смотреть видео</p>
                  <p>Узнайте больше о нашей компании</p>
                </div>
              </div>
            </div>

            <p>
              Нажимая кнопку “Обсудить проект”, вы соглашаетесь с{" "}
              <Link to="/">Политикой конфиденциальности</Link>
            </p>
          </div>

          <div className={style.home__gift}>
            <img src={giftIcon} alt="gift" />
            <p>
              При заключении договора до 31 декабря 2024 года ФУНДАМЕНТ В
              ПОДАРОК
            </p>
          </div>

          <div className={`${style.home__video} ${style.home__video__2}`}>
            <button>
              <div className={style.home__video__button__container}>
                <img src={playIcon} alt="play icon" />
              </div>
            </button>

            <div className={style.home__video__text}>
              <p>Смотреть видео</p>
              <p>Узнайте больше о нашей компании</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;

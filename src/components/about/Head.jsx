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
                <p>О нас</p>
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
                SD STROY
              </h1>
            )}
          </Motion>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Head;

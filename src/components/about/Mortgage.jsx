import React from "react";
import style from "./mortgage.module.scss";
import arrowRight from "../../assets/icons/home/arrow-right-3.svg";
import sber from "../../assets/images/home/sber.svg";
import alfa from "../../assets/images/home/alfa.svg";
import vtb from "../../assets/images/home/vtb.svg";
import gazprom from "../../assets/images/home/gazprom.svg";
import domrf from "../../assets/images/home/domrf.svg";
import rosselhoz from "../../assets/images/home/rosselhoz.svg";
import { Link } from "react-router-dom";

const Mortgage = ({ setOpenModal }) => {
  return (
    <section className={style.mortgage}>
      <div className="container">
        <div className={style.mortgage__wrapper}>
          <div className={style.mortgage__top}>
            <h2>ИПОТЕКА</h2>
          </div>

          <div className={style.mortgage__main}>
            <aside className={style.mortgage__left}>
              <h4>Аккредитованный застройщик</h4>
              <p>
                Наша компания аккредитирована в ведущих банках страны для того,
                чтобы вы могли построить дом мечты на безопасных и выгодных
                условиях
              </p>

              <Link to="#contacts" onClick={() => setOpenModal(true)}>
                Оставить заявку <img src={arrowRight} alt="arrow right" />
              </Link>
            </aside>
            <aside className={style.mortgage__right}>
              <ul>
                {[
                  {
                    logo: sber,
                    color: "#21A049",
                  },

                  {
                    logo: alfa,
                    color: "#EF3124",
                  },

                  {
                    logo: vtb,
                    color: "#0A2973",
                  },

                  {
                    logo: gazprom,
                    color: "#476BF0",
                  },

                  {
                    logo: domrf,
                    color: "#99C45A",
                  },

                  {
                    logo: rosselhoz,
                    color: "#42AB44",
                  },
                ].map(({ logo, color }) => (
                  <li key={color} style={{ background: color }}>
                    <img src={logo} alt="logo" />
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mortgage;

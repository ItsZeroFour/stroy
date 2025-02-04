import React, { useEffect, useState } from "react";
import style from "./about.module.scss";
import aboutIcon1 from "../../assets/icons/home/about-icon-1.svg";
import aboutIcon2 from "../../assets/icons/home/about-icon-2.svg";
import aboutIcon3 from "../../assets/icons/home/about-icon-3.svg";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/icons/home/arrow-right-2.svg";
import aboutVideoImg from "../../assets/images/home/about-img.jpg";
import playIcon from "../../assets/icons/home/play.svg";
import Video2 from "../Video2";

const About = () => {
  const [openVideo, setOpenVideo] = useState(false);

  useEffect(() => {
    if (openVideo) {
      const preventScroll = (event) => event.preventDefault();

      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      document.body.style.overflowY = "hidden";

      return () => {
        window.removeEventListener("wheel", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
        document.body.style.overflowY = "auto";
      };
    }
  }, [openVideo]);

  return (
    <section className={style.about}>
      <div className="container">
        <div className={style.about__wrapper}>
          <div className={style.about__top}>
            <h2>О НАС</h2>
            <p>04</p>
          </div>

          <div className={style.about__content}>
            <aside className={style.about__left}>
              <p>
                <span>SD STROY</span> – это строительная компания полного цикла.
                Мы являемся надежным застройщиком малоэтажных домов в республике
                Чувашия. За 10 лет существования компании на рынке, мы воплотили
                смелые идеи и желания наших клиентов в строительство дома мечты.
              </p>

              <ul>
                <li>
                  <img src={aboutIcon1} alt="Аккредитованный застройщик" />

                  <div className={style.about__item__text}>
                    <h5>Аккредитованный застройщик</h5>
                    <p>
                      Аккредитация в ведущих банках для безопасной и выгодной
                      сделки
                    </p>
                  </div>
                </li>

                <li>
                  <img src={aboutIcon2} alt="Открытые и честные сметы" />

                  <div className={style.about__item__text}>
                    <h5>Открытые и честные сметы</h5>
                    <p>Фиксированные цены без наценок от поставщиков</p>
                  </div>
                </li>

                <li>
                  <img src={aboutIcon3} alt="Гарантия качества" />

                  <div className={style.about__item__text}>
                    <h5>Гарантия качества</h5>
                    <p>Повышенная гарантия на объект до 20 лет</p>
                  </div>
                </li>
              </ul>

              <Link to="/">
                Узнать больше о компании{" "}
                <img src={arrowRight} alt="Узнать больше о компании" />
              </Link>
            </aside>

            <aside className={style.about__right}>
              <img src={aboutVideoImg} alt="video preview" />

              <div className={style.about__right__content}>
                <button onClick={() => setOpenVideo(true)}>
                  <div className={style.about__right__button}>
                    <img src={playIcon} alt="play" />
                  </div>
                </button>

                <h5>Смотреть видео</h5>
                <p>Узнайте больше о нашей компании</p>
              </div>
            </aside>
          </div>

          {openVideo && <Video2 setOpenVideo={setOpenVideo} />}
        </div>
      </div>
    </section>
  );
};

export default About;

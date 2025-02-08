import React, { useEffect, useState } from "react";
import style from "./zifrs.module.scss";
import Video2 from "../Video2";
import aboutVideoImg from "../../assets/images/home/about-img.jpg";
import playIcon from "../../assets/icons/home/play.svg";

const Zifrs = () => {
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
    <section className={style.zifrs}>
      <div className="container">
        <div className={style.zifrs__wrapper}>
          <div className={style.zifrs__top}>
            <h2>О НАС В ЦИФРАХ</h2>
          </div>

          <div className={style.zifrs__content}>
            <aside className={style.zifrs__left}>
              <ul>
                <li>
                  <h3>2012</h3>
                  <p>год основания компании</p>
                </li>

                <li>
                  <h3>120+</h3>
                  <p>реализованных проектов</p>
                </li>

                <li>
                  <h3>22</h3>
                  <p>проекта в работе</p>
                </li>
              </ul>
            </aside>

            <aside className={style.zifrs__right}>
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

export default Zifrs;

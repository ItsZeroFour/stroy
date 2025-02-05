import React, { useState } from "react";
import style from "./reviews.module.scss";
import reviewsImg from "../../assets/images/home/reviews-img-1.png";
import playIcon from "../../assets/icons/home/play.svg";
import Video2 from "../Video2";

const Reviews = () => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <section className={style.reviews}>
      <div className="container">
        <div className={style.reviews__wrapper}>
          <div className={style.reviews__top}>
            <h2>ОТЗЫВЫ КЛИЕНТОВ</h2>
            <p>07</p>
          </div>

          <div className={style.reviews__content}>
            <div className={style.reviews__main}>
              <img src={reviewsImg} alt="video preview" />

              <div className={style.about__right__content}>
                <button onClick={() => setOpenVideo(true)}>
                  <div className={style.about__right__button}>
                    <img src={playIcon} alt="play" />
                  </div>
                </button>

                <h5>Смотреть видео</h5>
                <p>Узнайте больше о нашей компании</p>
              </div>
            </div>

            <ul>
              <li>
                <img src={reviewsImg} alt="video preview" />
              </li>

              <li>
                <img src={reviewsImg} alt="video preview" />
              </li>

              <li>
                <img src={reviewsImg} alt="video preview" />
              </li>

              <li>
                <img src={reviewsImg} alt="video preview" />
              </li>

              <li>
                <img src={reviewsImg} alt="video preview" />
              </li>

              <li>
                <img src={reviewsImg} alt="video preview" />
              </li>

              
              <li>
                <img src={reviewsImg} alt="video preview" />
              </li>
            </ul>
          </div>

          {openVideo && <Video2 setOpenVideo={setOpenVideo} />}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

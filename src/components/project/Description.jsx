import React, { useState } from "react";
import style from "./description.module.scss";
import sliderImg1 from "../../assets/images/project/slider-1.jpg";
import sliderImg2 from "../../assets/images/project/slider-2.jpg";
import bed from "../../assets/images/project/bed.svg";
import kitchen from "../../assets/images/project/kitchen.svg";
import bath from "../../assets/images/project/bath.svg";
import livingRoom from "../../assets/images/project/living_room.svg";
import arrowRight from "../../assets/icons/home/arrow-right-3.svg";
import navArrowLeft from "../../assets/icons/project/arrow-left.svg";
import navArrowRight from "../../assets/icons/project/arrow-right.svg";

const Description = ({ setOpenModal }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [sliderImg1, sliderImg2];

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <section className={style.description}>
      <div className="container">
        <div className={style.description__wrapper}>
          <div className={style.description__top}>
            <h2>ОПИСАНИЕ ПРОЕКТА</h2>
          </div>

          <div className={style.description__content}>
            <div className={style.description__slider}>
              <div className={style.description__slider__main}>
                <img
                  src={images[currentImage]}
                  alt={`slider ${currentImage + 1}`}
                />

                <div className={style.description__nav}>
                  <button onClick={handlePrev}>
                    <img src={navArrowLeft} alt="arrow left" />
                  </button>
                  <button onClick={handleNext}>
                    <img src={navArrowRight} alt="arrow right" />
                  </button>
                </div>
              </div>

              <ul>
                {images.map((image, index) => (
                  <li key={index} onClick={() => handleImageClick(index)}>
                    <img src={image} alt={`slider ${index + 1}`} />
                  </li>
                ))}
              </ul>
            </div>

            <div className={style.description__characteristics}>
              <h4>ХАРАКТЕРИСТИКИ</h4>

              <ul className={style.description__characteristics__list}>
                <li>
                  <p>Материал</p>
                  <p>Каркас / камень</p>
                </li>

                <li>
                  <p>Площадь</p>
                  <p>101,4 м2</p>
                </li>

                <li>
                  <p>Количество комнат</p>
                  <p>3</p>
                </li>

                <li>
                  <p>Количество этажей</p>
                  <p>1</p>
                </li>

                <li>
                  <p>Высота этажа</p>
                  <p>2,7 м</p>
                </li>
              </ul>

              <ul className={style.description__characteristics__rooms}>
                <li>
                  <img src={bed} alt="bed" />
                  <p>3 спальни</p>
                </li>

                <li>
                  <img src={kitchen} alt="kitchen" />
                  <p>1 кухня</p>
                </li>

                <li>
                  <img src={bath} alt="bath" />
                  <p>2 ванные</p>
                </li>

                <li>
                  <img src={livingRoom} alt="livingRoom" />
                  <p>1 гостиная</p>
                </li>
              </ul>

              <div className={style.description__characteristics__bottom}>
                <p>от 000 000 000 ₽</p>
                <button onClick={() => setOpenModal(true)}>
                  <p>Обсудить проект</p> <img src={arrowRight} alt="arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;

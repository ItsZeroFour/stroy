import React, { useState, useEffect, useRef } from "react";
import { Motion, spring } from "react-motion";
import catalogHouse1 from "../../assets/images/home/catalog-1.webp";
import catalogHouse2 from "../../assets/images/home/catalog-2.webp";
import catalogHouse3 from "../../assets/images/home/catalog-3.webp";
import catalogHouse4 from "../../assets/images/home/catalog-4.webp";
import catalogHouse5 from "../../assets/images/home/catalog-5.webp";
import catalogHouse6 from "../../assets/images/home/catalog-6.webp";
import { Link } from "react-router-dom";
import arrowRight3 from "../../assets/icons/home/arrow-right-3.svg";
import arrowRight2 from "../../assets/icons/home/arrow-right-2.svg";
import style from "./completed.module.scss";

const Completed = () => {
  const [isVisible, setIsVisible] = useState(false);
  const catalogRef = useRef(null);

  const catalogList = [
    {
      img: catalogHouse1,
      type: "Каменный дом",
      name: "Дом из керамического блока",
      characteristics: {
        square: "101,4 м2",
        rooms_count: 3,
        floors_count: 1,
      },
      location: "дер. Яранкасы",
    },

    {
      img: catalogHouse2,
      type: "Каменный дом",
      name: "Кирпичный дом",
      characteristics: {
        square: "101,4 м2",
        rooms_count: 3,
        floors_count: 1,
      },
      location: "дер. Яранкасы",
    },

    {
      img: catalogHouse3,
      type: "Каркасный дом",
      name: "Каркасный дом",
      characteristics: {
        square: "101,4 м2",
        rooms_count: 3,
        floors_count: 1,
      },
      location: "дер. Яранкасы",
    },

    {
      img: catalogHouse4,
      type: "Каменный дом",
      name: "Каменный дом",
      characteristics: {
        square: "101,4 м2",
        rooms_count: 3,
        floors_count: 1,
      },
      location: "дер. Яранкасы",
    },

    {
      img: catalogHouse5,
      type: "Каркасный дом",
      name: "Каркасный дом",
      characteristics: {
        square: "101,4 м2",
        rooms_count: 3,
        floors_count: 1,
      },
      location: "дер. Яранкасы",
    },

    {
      img: catalogHouse6,
      type: "Каменный дом",
      name: "Каменный дом",
      characteristics: {
        square: "101,4 м2",
        rooms_count: 3,
        floors_count: 1,
      },
      location: "дер. Яранкасы",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (catalogRef.current) {
      observer.observe(catalogRef.current);
    }

    return () => {
      if (catalogRef.current) {
        observer.unobserve(catalogRef.current);
      }
    };
  }, []);

  return (
    <section className={style.catalog} ref={catalogRef}>
      <div className="container">
        <div className={style.catalog__wrapper}>
          <div className={style.catalog__top}>
            <h2>ГОТОВЫЕ ОБЪЕКТЫ</h2>
            <p>05</p>
          </div>

          <ul>
            {catalogList.map(
              ({ img, type, name, characteristics, location }, index) => (
                <Motion
                  key={index}
                  defaultStyle={{ opacity: 0, transform: 50 }}
                  style={{
                    opacity: spring(isVisible ? 1 : 0),
                    transform: spring(isVisible ? 0 : 50),
                  }}
                >
                  {(style_) => (
                    <li
                      style={{
                        opacity: style_.opacity,
                        transform: `translateY(${style_.transform}px)`,
                      }}
                    >
                      <div className={style.catalog__image}>
                        <img src={img} alt={name} />

                        <div className={style.catalog__location}>
                          <p>{location}</p>
                        </div>
                      </div>

                      <div
                        className={style.catalog__item__type}
                        style={
                          type === "Каменный дом"
                            ? { border: "1px solid #898FC5", color: "#898FC5" }
                            : { border: "1px solid #E1A356", color: "#E1A356" }
                        }
                      >
                        <p>{type}</p>
                      </div>

                      <h3>{name}</h3>

                      <ul className={style.catalog__item__characteristics}>
                        <li>
                          <p>Площадь</p>
                          <p>{characteristics.square}</p>
                        </li>

                        <li>
                          <p>Количество комнат</p>
                          <p>{characteristics.rooms_count}</p>
                        </li>

                        <li>
                          <p>Количество этажей</p>
                          <p>{characteristics.floors_count}</p>
                        </li>
                      </ul>

                      <div className={style.catalog__item__bottom}>
                        <Link to="/project">
                          Узнать больше о проекте{" "}
                          <img src={arrowRight3} alt="Подробнее" />
                        </Link>
                      </div>
                    </li>
                  )}
                </Motion>
              )
            )}
          </ul>

          <div className={style.catalog__link}>
            <Link to="/">
            Загрузить больше проектов{" "}
              <img src={arrowRight2} alt="Посмотреть весь каталог" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Completed;

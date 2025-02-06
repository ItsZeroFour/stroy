import React, { useState, useEffect, useRef } from "react";
import { Motion, spring } from "react-motion";
import style from "./catalog.module.scss";
import catalogHouse1 from "../../assets/images/home/catalog-1.jpg";
import catalogHouse2 from "../../assets/images/home/catalog-2.jpg";
import catalogHouse3 from "../../assets/images/home/catalog-3.jpg";
import catalogHouse4 from "../../assets/images/home/catalog-4.jpg";
import catalogHouse5 from "../../assets/images/home/catalog-5.jpg";
import catalogHouse6 from "../../assets/images/home/catalog-6.jpg";
import { Link } from "react-router-dom";
import arrowRight3 from "../../assets/icons/home/arrow-right-3.svg";
import arrowRight2 from "../../assets/icons/home/arrow-right-2.svg";

const Catalog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const catalogRef = useRef(null);

  const catalogList = [
    {
      img: catalogHouse1,
      type: "Каменный дом",
      name: "SD-1",
      characteristics: {
        square: "101,4 м2",
        rooms_count: 3,
        floors_count: 1,
      },
      price: 10000000,
    },

    {
      img: catalogHouse2,
      type: "Каменный дом",
      name: "SD-2",
      characteristics: {
        square: "101,4 м2",
        rooms_count: 3,
        floors_count: 1,
      },
      price: 10000000,
    },

    {
      img: catalogHouse3,
      type: "Каркасный дом",
      name: "SD-2",
      characteristics: {
        square: "101,4 м2",
        rooms_count: 3,
        floors_count: 1,
      },
      price: 10000000,
    },

    {
      img: catalogHouse4,
      type: "Каменный дом",
      name: "SD-3",
      characteristics: {
        square: "101,4 м2",
        rooms_count: 3,
        floors_count: 1,
      },
      price: 10000000,
    },

    {
      img: catalogHouse5,
      type: "Каркасный дом",
      name: "SD-3",
      characteristics: {
        square: "101,4 м2",
        rooms_count: 3,
        floors_count: 1,
      },
      price: 10000000,
    },

    {
      img: catalogHouse6,
      type: "Каменный дом",
      name: "SD-4",
      characteristics: {
        square: "101,4 м2",
        rooms_count: 3,
        floors_count: 1,
      },
      price: 10000000,
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
            <h2>КАТАЛОГ ДОМОВ</h2>
            <p>02</p>
          </div>

          <ul>
            {catalogList.map(
              ({ img, type, name, characteristics, price }, index) => (
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
                      <img src={img} alt={name} />
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
                        <p>
                          от {new Intl.NumberFormat("ru-RU").format(price)} ₽
                        </p>
                        <Link to="/project">
                          Подробнее <img src={arrowRight3} alt="Подробнее" />
                        </Link>
                      </div>
                    </li>
                  )}
                </Motion>
              )
            )}
          </ul>

          <div className={style.catalog__link}>
            <Link to="/catalog">
              Посмотреть весь каталог{" "}
              <img src={arrowRight2} alt="Посмотреть весь каталог" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;

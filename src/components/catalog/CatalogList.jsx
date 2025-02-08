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
import settings from "../../assets/icons/catalog/setting.svg";
import arrow from "../../assets/icons/catalog/arrow.svg";
import filter from "../../assets/icons/catalog/filter.svg";
import xMark from "../../assets/icons/home/x-mark.svg";

const CatalogList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [selectedOption, setSelectedOption] = useState("По умолчанию");
  const [selectedOption2, setSelectedOption2] = useState("Все дома");
  const [openFilter, setOpenFilter] = useState(false);
  const [filterValues, setFilterValues] = useState({
    type: "Все дома",
    priceFrom: "",
    priceTo: "",
    squareFrom: "",
    squareTo: "",
    roomsFrom: "",
    roomsTo: "",
    floorsFrom: "",
    floorsTo: "",
  });
  const [catalogList, setCatalogList] = useState([
    {
      img: catalogHouse1,
      type: "Каменный дом",
      name: "SD-1",
      characteristics: {
        square: "101,4 м2",
        rooms_count: 3,
        floors_count: 1,
      },
      price: 999999,
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
        rooms_count: 6,
        floors_count: 1,
      },
      price: 10000000,
    },

    {
      img: catalogHouse1,
      type: "Каменный дом",
      name: "SD-1",
      characteristics: {
        square: "101,4 м2",
        rooms_count: 5,
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
  ]);
  const [originalCatalogList] = useState([...catalogList]);
  const catalogRef = useRef(null);
  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);

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
      { threshold: 0.1 }
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

  const handleSelectClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    if (option === "По возрастанию") {
      setCatalogList((prevList) =>
        [...prevList].sort((a, b) => a.price - b.price)
      );
    } else if (option === "По убыванию") {
      setCatalogList((prevList) =>
        [...prevList].sort((a, b) => b.price - a.price)
      );
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleSelectClick2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const handleOptionClick2 = (option) => {
    setSelectedOption2(option);
    setIsDropdownOpen2(false);
    setFilterValues((prevValues) => ({
      ...prevValues,
      type: option,
    }));
  };

  const handleClickOutside2 = (event) => {
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
      setIsDropdownOpen2(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFilterValues({
      type: "Все дома",
      priceFrom: "",
      priceTo: "",
      squareFrom: "",
      squareTo: "",
      roomsFrom: "",
      roomsTo: "",
      floorsFrom: "",
      floorsTo: "",
    });
    setCatalogList(originalCatalogList);
    setOpenFilter(false);
  };

  const handleSearch = () => {
    setCatalogList(
      originalCatalogList.filter((item) => {
        const price = item.price;
        const square = parseFloat(
          item.characteristics.square.replace(",", ".")
        );
        const rooms = item.characteristics.rooms_count;
        const floors = item.characteristics.floors_count;

        return (
          (filterValues.type === "Все дома" ||
            item.type === filterValues.type) &&
          (filterValues.priceFrom === "" || price >= filterValues.priceFrom) &&
          (filterValues.priceTo === "" || price <= filterValues.priceTo) &&
          (filterValues.squareFrom === "" ||
            square >= filterValues.squareFrom) &&
          (filterValues.squareTo === "" || square <= filterValues.squareTo) &&
          (filterValues.roomsFrom === "" || rooms >= filterValues.roomsFrom) &&
          (filterValues.roomsTo === "" || rooms <= filterValues.roomsTo) &&
          (filterValues.floorsFrom === "" ||
            floors >= filterValues.floorsFrom) &&
          (filterValues.floorsTo === "" || floors <= filterValues.floorsTo)
        );
      })
    );
    setOpenFilter(false);
  };

  const handleRemoveFilter = (filterName) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      [filterName]: "",
      ...(filterName === "priceFrom" || filterName === "priceTo"
        ? { priceFrom: "", priceTo: "" }
        : {}),
      ...(filterName === "squareFrom" || filterName === "squareTo"
        ? { squareFrom: "", squareTo: "" }
        : {}),
      ...(filterName === "roomsFrom" || filterName === "roomsTo"
        ? { roomsFrom: "", roomsTo: "" }
        : {}),
      ...(filterName === "floorsFrom" || filterName === "floorsTo"
        ? { floorsFrom: "", floorsTo: "" }
        : {}),
    }));
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    if (isDropdownOpen2) {
      document.addEventListener("mousedown", handleClickOutside2);
    } else {
      document.removeEventListener("mousedown", handleClickOutside2);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside2);
    };
  }, [isDropdownOpen2]);

  useEffect(() => {
    // Обновление списка фильтров при сбросе
    if (filterValues.type === "Все дома" &&
        filterValues.priceFrom === "" &&
        filterValues.priceTo === "" &&
        filterValues.squareFrom === "" &&
        filterValues.squareTo === "" &&
        filterValues.roomsFrom === "" &&
        filterValues.roomsTo === "" &&
        filterValues.floorsFrom === "" &&
        filterValues.floorsTo === "") {
      setCatalogList(originalCatalogList);
    }
  }, [filterValues]);

  return (
    <section className={style.catalog} ref={catalogRef}>
      <div className="container">
        <div className={style.catalog__wrapper}>
          <div className={style.catalog__top}>
            <div>
              <div className={style.catalog__top__select} ref={dropdownRef}>
                <div
                  className={style.catalog__top__select__main}
                  onClick={handleSelectClick}
                >
                  <img src={settings} alt="settings" />
                  <p>{selectedOption}</p>
                  <img src={arrow} alt="arrow" />
                </div>

                {isDropdownOpen && (
                  <ul>
                    <li onClick={() => handleOptionClick("По умолчанию")}>
                      По умолчанию
                    </li>
                    <li onClick={() => handleOptionClick("По возрастанию")}>
                      По возрастанию
                    </li>
                    <li onClick={() => handleOptionClick("По убыванию")}>
                      По убыванию
                    </li>
                  </ul>
                )}
              </div>

              <div className={style.catalog__top__filter}>
                <div
                  className={style.catalog__top__filter__main}
                  onClick={() => setOpenFilter(true)}
                >
                  <img src={filter} alt="filter" />
                  <p>Фильтр</p>
                </div>

                {openFilter && (
                  <div className={style.catalog__top__filter__content}>
                    <div className={style.catalog__top__filter__wrapper}>
                      <h3>ФИЛЬТР</h3>

                      <button
                        className={style.catalog__top__filter__close}
                        onClick={() => setOpenFilter(false)}
                      >
                        <img src={xMark} alt="x mark" />
                      </button>

                      <ul>
                        <li>
                          <p>Тип дома</p>

                          <div
                            className={style.catalog__top__select}
                            ref={dropdownRef2}
                          >
                            <div
                              className={style.catalog__top__select__main}
                              onClick={handleSelectClick2}
                            >
                              <p>{selectedOption2}</p>

                              <img src={arrow} alt="arrow" />
                            </div>

                            {isDropdownOpen2 && (
                              <ul>
                                <li
                                  onClick={() => handleOptionClick2("Все дома")}
                                >
                                  Все дома
                                </li>
                                <li
                                  onClick={() =>
                                    handleOptionClick2("Каркасные дома")
                                  }
                                >
                                  Каркасные дома
                                </li>
                                <li
                                  onClick={() =>
                                    handleOptionClick2("Каменные дома")
                                  }
                                >
                                  Каменные дома
                                </li>
                              </ul>
                            )}
                          </div>
                        </li>

                        <li>
                          <p>Цена, ₽</p>

                          <div className={style.catalog__top__filter__inputs}>
                            <input
                              type="number"
                              placeholder="от"
                              name="priceFrom"
                              value={filterValues.priceFrom}
                              onChange={handleFilterChange}
                            />
                            <input
                              type="number"
                              placeholder="до"
                              name="priceTo"
                              value={filterValues.priceTo}
                              onChange={handleFilterChange}
                            />
                          </div>
                        </li>

                        <li>
                          <p>Площадь, м2</p>

                          <div className={style.catalog__top__filter__inputs}>
                            <input
                              type="number"
                              placeholder="от"
                              name="squareFrom"
                              value={filterValues.squareFrom}
                              onChange={handleFilterChange}
                            />
                            <input
                              type="number"
                              placeholder="до"
                              name="squareTo"
                              value={filterValues.squareTo}
                              onChange={handleFilterChange}
                            />
                          </div>
                        </li>

                        <li>
                          <p>Количество комнат</p>

                          <div className={style.catalog__top__filter__inputs}>
                            <input
                              type="number"
                              placeholder="от"
                              name="roomsFrom"
                              value={filterValues.roomsFrom}
                              onChange={handleFilterChange}
                            />
                            <input
                              type="number"
                              placeholder="до"
                              name="roomsTo"
                              value={filterValues.roomsTo}
                              onChange={handleFilterChange}
                            />
                          </div>
                        </li>

                        <li>
                          <p>Количество этажей</p>

                          <div className={style.catalog__top__filter__inputs}>
                            <input
                              type="number"
                              placeholder="от"
                              name="floorsFrom"
                              value={filterValues.floorsFrom}
                              onChange={handleFilterChange}
                            />
                            <input
                              type="number"
                              placeholder="до"
                              name="floorsTo"
                              value={filterValues.floorsTo}
                              onChange={handleFilterChange}
                            />
                          </div>
                        </li>
                      </ul>

                      <div className={style.catalog__top__filter__buttons}>
                        <button onClick={handleReset}>Сбросить</button>
                        <button onClick={handleSearch}>Поиск</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <ul className={style.catalog__filter__list}>
                {filterValues.type !== "Все дома" && (
                  <li>
                    {filterValues.type}
                    <button onClick={() => handleRemoveFilter("type")}>
                      <img src={xMark} alt="x mark" />
                    </button>
                  </li>
                )}
                {(filterValues.priceFrom || filterValues.priceTo) && (
                  <li>
                    Цена: {filterValues.priceFrom && `от ${new Intl.NumberFormat("ru-RU").format(filterValues.priceFrom)} ₽`} {filterValues.priceTo && `до ${new Intl.NumberFormat("ru-RU").format(filterValues.priceTo)} ₽`}
                    <button onClick={() => handleRemoveFilter("priceFrom")}>
                      <img src={xMark} alt="x mark" />
                    </button>
                  </li>
                )}
                {(filterValues.squareFrom || filterValues.squareTo) && (
                  <li>
                    Площадь: {filterValues.squareFrom && `от ${filterValues.squareFrom} м2`} {filterValues.squareTo && `до ${filterValues.squareTo} м2`}
                    <button onClick={() => handleRemoveFilter("squareFrom")}>
                      <img src={xMark} alt="x mark" />
                    </button>
                  </li>
                )}
                {(filterValues.roomsFrom || filterValues.roomsTo) && (
                  <li>
                    Количество комнат: {filterValues.roomsFrom && `от ${filterValues.roomsFrom}`} {filterValues.roomsTo && `до ${filterValues.roomsTo}`}
                    <button onClick={() => handleRemoveFilter("roomsFrom")}>
                      <img src={xMark} alt="x mark" />
                    </button>
                  </li>
                )}
                {(filterValues.floorsFrom || filterValues.floorsTo) && (
                  <li>
                    Количество этажей: {filterValues.floorsFrom && `от ${filterValues.floorsFrom}`} {filterValues.floorsTo && `до ${filterValues.floorsTo}`}
                    <button onClick={() => handleRemoveFilter("floorsFrom")}>
                      <img src={xMark} alt="x mark" />
                    </button>
                  </li>
                )}
              </ul>
            </div>

            <p>
              <p>Всего 1 234 проекта</p>
            </p>
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

            {catalogList.length === 0 && (
              <div className={style.catalog__not_found}>
                <h4>Ничего не найдено</h4>
                <p>К сожалению, по вашему запросу ничего не найдено</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CatalogList;

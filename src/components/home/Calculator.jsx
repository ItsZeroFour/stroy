import React, { useState, useEffect } from "react";
import style from "./calculator.module.scss";
import calculator from "../../assets/icons/home/Calculator.svg";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";
import calendar from "../../assets/icons/Calendar.svg";

const Calculator = ({ setOpenModal, targetRef3 }) => {
  const [price, setPrice] = useState(6000000);
  const [contribution, setContribution] = useState(600000);
  const [contributionProcents, setContributionProcents] = useState(1);
  const [rublesContribution, setRublesContribution] = useState(true);
  const [enabled, setEnabled] = useState(false);
  const [interestRate, setInterestRate] = useState(14);
  const [age, setAge] = useState(10);

  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [overpayment, setOverpayment] = useState(0);

  useEffect(() => {
    const calculateLoan = () => {
      const principal = rublesContribution
        ? price - contribution
        : price - (price * contributionProcents) / 100;
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = age * 12;

      const monthly =
        (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
      const total = monthly * numberOfPayments;
      const overpay = total - principal;

      setLoanAmount(principal);
      setMonthlyPayment(monthly);
      setTotalPayment(total);
      setOverpayment(overpay);
    };

    calculateLoan();
  }, [
    price,
    contribution,
    contributionProcents,
    rublesContribution,
    interestRate,
    age,
  ]);

  const changePriceWiaButton = (appearance) => {
    if (appearance === "-") {
      setPrice((prevPrice) => Math.max(6000000, prevPrice - 1000000));
    } else {
      setPrice((prevPrice) => Math.min(50000000, prevPrice + 1000000));
    }
  };

  const changeContributionWiaButton = (appearance) => {
    if (appearance === "-") {
      setContribution((prevPrice) => Math.max(600000, prevPrice - 100000));
    } else {
      setContribution((prevPrice) => Math.min(2700000, prevPrice + 100000));
    }
  };

  const changeContributionWiaButton2 = (appearance) => {
    if (appearance === "-") {
      setContributionProcents((prevPrice) => Math.max(1, prevPrice - 10));
    } else {
      setContributionProcents((prevPrice) => Math.min(100, prevPrice + 10));
    }
  };

  const changeInterestRateWiaButton = (appearance) => {
    if (appearance === "-") {
      setInterestRate((prevPrice) => Math.max(3, prevPrice - 10));
    } else {
      setInterestRate((prevPrice) => Math.min(100, prevPrice + 10));
    }
  };

  const changeAgeWiaButton = (appearance) => {
    if (appearance === "-") {
      setAge((prevPrice) => Math.max(3, prevPrice - 1));
    } else {
      setAge((prevPrice) => Math.min(100, prevPrice + 1));
    }
  };

  return (
    <section className={style.calculator} ref={targetRef3}>
      <div className="container">
        <div className={style.calculator__wrapper}>
          <div className={style.calculator__top}>
            <h2>
              <img src={calculator} alt="calculator" /> ИПОТЕЧНЫЙ КАЛЬКУЛЯТОР
            </h2>
            <p>
              Здесь вы можете рассчитать ипотеку для строительства вашего дома
              мечты
            </p>
          </div>

          <div className={style.calculator__main}>
            <aside className={style.calculator__left}>
              <ul>
                <li>
                  <div className={style.calculator__item__top}>
                    <p>Стоимость недвижимости</p>
                  </div>

                  <div className={style.calculator__range}>
                    <button onClick={() => changePriceWiaButton("-")}>-</button>
                    <div className={style.calculator__range__value}>
                      <p>{new Intl.NumberFormat("ru-RU").format(price)} ₽</p>
                      <Slider
                        value={price}
                        min={6000000}
                        max={50000000}
                        onChange={(val) => setPrice(val)}
                        trackStyle={{
                          backgroundColor: "#E1A356",
                          height: 4,
                          marginTop: 5,
                        }}
                        handleStyle={{
                          borderColor: "#E1A356",
                          height: 12,
                          width: 12,
                          backgroundColor: "#E1A356",
                          marginTop: 0,
                        }}
                        railStyle={{
                          backgroundColor: "#d3d7de",
                          height: 4,
                          borderRadius: 0,
                          marginTop: 5,
                        }}
                      />
                    </div>
                    <button onClick={() => changePriceWiaButton("+")}>+</button>
                  </div>

                  <div className={style.calculator__minmax}>
                    <p>от 6 млн. ₽</p>
                    <p>до 50 млн. ₽</p>
                  </div>
                </li>

                <li>
                  <div className={style.calculator__item__top}>
                    <p>Первоначальный взнос</p>

                    <div className={style.calculator__item__top__buttons}>
                      <label className={style.custom__radio}>
                        <input
                          type="radio"
                          name="options"
                          value="option1"
                          checked={rublesContribution}
                          onChange={() => setRublesContribution(true)}
                        />
                        <span className={style.radio__button}></span>
                        <p>в рублях</p>
                      </label>

                      <label className={style.custom__radio}>
                        <input
                          type="radio"
                          name="options"
                          value="option1"
                          checked={!rublesContribution}
                          onChange={() => setRublesContribution(false)}
                        />
                        <span className={style.radio__button}></span>
                        <p>в процентах</p>
                      </label>
                    </div>
                  </div>

                  {rublesContribution ? (
                    <div className={style.calculator__range}>
                      <button onClick={() => changeContributionWiaButton("-")}>
                        -
                      </button>
                      <div className={style.calculator__range__value}>
                        <p>
                          {new Intl.NumberFormat("ru-RU").format(contribution)}{" "}
                          ₽
                        </p>
                        <Slider
                          value={contribution}
                          min={600000}
                          max={2700000}
                          onChange={(val) => setContribution(val)}
                          trackStyle={{
                            backgroundColor: "#E1A356",
                            height: 4,
                            marginTop: 5,
                          }}
                          handleStyle={{
                            borderColor: "#E1A356",
                            height: 12,
                            width: 12,
                            backgroundColor: "#E1A356",
                            marginTop: 0,
                          }}
                          railStyle={{
                            backgroundColor: "#d3d7de",
                            height: 4,
                            borderRadius: 0,
                            marginTop: 5,
                          }}
                        />
                      </div>
                      <button onClick={() => changeContributionWiaButton("+")}>
                        +
                      </button>
                    </div>
                  ) : (
                    <div className={style.calculator__range}>
                      <button onClick={() => changeContributionWiaButton2("-")}>
                        -
                      </button>
                      <div className={style.calculator__range__value}>
                        <p>
                          {new Intl.NumberFormat("ru-RU").format(
                            contributionProcents
                          )}{" "}
                          %
                        </p>
                        <Slider
                          value={contributionProcents}
                          min={1}
                          max={100}
                          onChange={(val) => setContributionProcents(val)}
                          trackStyle={{
                            backgroundColor: "#E1A356",
                            height: 4,
                            marginTop: 5,
                          }}
                          handleStyle={{
                            borderColor: "#E1A356",
                            height: 12,
                            width: 12,
                            backgroundColor: "#E1A356",
                            marginTop: 0,
                          }}
                          railStyle={{
                            backgroundColor: "#d3d7de",
                            height: 4,
                            borderRadius: 0,
                            marginTop: 5,
                          }}
                        />
                      </div>
                      <button onClick={() => changeContributionWiaButton2("+")}>
                        +
                      </button>
                    </div>
                  )}

                  {rublesContribution ? (
                    <div className={style.calculator__minmax}>
                      <p>от 600 тыс. ₽</p>
                      <p>до 2.7 млн. ₽</p>
                    </div>
                  ) : (
                    <div className={style.calculator__minmax}>
                      <p>от 1%</p>
                      <p>до 100%</p>
                    </div>
                  )}
                </li>

                <li>
                  <div className={style.calculator__item__top__spec}>
                    <div
                      className={`${style.toggle} ${
                        enabled ? style.toggle__on : ""
                      }`}
                      onClick={() => setEnabled(!enabled)}
                    >
                      <div className={style.toggle__slider}></div>
                    </div>
                    <p>Использовать материнский капитал</p>
                  </div>
                </li>

                <li>
                  <div className={style.calculator__item__bottom}>
                    <div className={style.calculator__item__bottom__item}>
                      <div className={style.calculator__item__top}>
                        <p>Процентная ставка</p>
                      </div>

                      <div className={style.calculator__range}>
                        <button
                          onClick={() => changeInterestRateWiaButton("-")}
                        >
                          -
                        </button>
                        <div className={style.calculator__range__value}>
                          <p>
                            {new Intl.NumberFormat("ru-RU").format(
                              interestRate
                            )}{" "}
                            %
                          </p>
                          <Slider
                            value={interestRate}
                            min={3}
                            max={100}
                            onChange={(val) => setInterestRate(val)}
                            trackStyle={{
                              backgroundColor: "#E1A356",
                              height: 4,
                              marginTop: 5,
                            }}
                            handleStyle={{
                              borderColor: "#E1A356",
                              height: 12,
                              width: 12,
                              backgroundColor: "#E1A356",
                              marginTop: 0,
                            }}
                            railStyle={{
                              backgroundColor: "#d3d7de",
                              height: 4,
                              borderRadius: 0,
                              marginTop: 5,
                            }}
                          />
                        </div>
                        <button
                          onClick={() => changeInterestRateWiaButton("+")}
                        >
                          +
                        </button>
                      </div>

                      <div className={style.calculator__minmax}>
                        <p>от 3 %</p>
                        <p>до 100 %</p>
                      </div>
                    </div>

                    <div className={style.calculator__item__bottom__item}>
                      <div className={style.calculator__item__top}>
                        <p>Срок кредита (лет)</p>
                      </div>

                      <div className={style.calculator__range}>
                        <button onClick={() => changeAgeWiaButton("-")}>
                          -
                        </button>
                        <div className={style.calculator__range__value}>
                          <p>{new Intl.NumberFormat("ru-RU").format(age)}</p>
                          <Slider
                            value={age}
                            min={1}
                            max={30}
                            onChange={(val) => setAge(val)}
                            trackStyle={{
                              backgroundColor: "#E1A356",
                              height: 4,
                              marginTop: 5,
                            }}
                            handleStyle={{
                              borderColor: "#E1A356",
                              height: 12,
                              width: 12,
                              backgroundColor: "#E1A356",
                              marginTop: 0,
                            }}
                            railStyle={{
                              backgroundColor: "#d3d7de",
                              height: 4,
                              borderRadius: 0,
                              marginTop: 5,
                            }}
                          />
                        </div>
                        <button onClick={() => changeAgeWiaButton("+")}>
                          +
                        </button>
                      </div>

                      <div className={style.calculator__minmax}>
                        <p>от 1</p>
                        <p>до 30</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </aside>
            <aside className={style.calculator__right}>
              <div>
                <div className={style.calculator__right__elem}>
                  <div className={style.calculator__right__item}>
                    <p>Сумма кредита</p>
                    <h3>
                      {new Intl.NumberFormat("ru-RU").format(loanAmount)} ₽
                    </h3>
                  </div>

                  <div className={style.calculator__right__item}>
                    <p>Процентная ставка</p>
                    <h3>{interestRate}%</h3>
                  </div>
                </div>
                <div className={style.calculator__right__elem}>
                  <div className={style.calculator__right__item}>
                    <p>Ежемесячный платеж</p>
                    <h3>
                      {new Intl.NumberFormat("ru-RU").format(monthlyPayment)} ₽
                    </h3>
                  </div>

                  <div className={style.calculator__right__item}>
                    <p>Срок</p>
                    <h3 className={style.calculator__right__item__spec}>
                      {Math.floor(age)} лет{" "}
                      {Math.round((age - Math.floor(age)) * 12)} мес
                    </h3>
                  </div>
                </div>
                <div className={style.calculator__right__elem}>
                  <div className={style.calculator__right__item}>
                    <p>Всего к выплате (долг + проценты)</p>
                    <h3 className={style.calculator__right__item__spec}>
                      {new Intl.NumberFormat("ru-RU").format(totalPayment)} ₽
                    </h3>
                  </div>

                  <div className={style.calculator__right__item}>
                    <p>Сумма переплаты (проценты)</p>
                    <h3 className={style.calculator__right__item__spec}>
                      {new Intl.NumberFormat("ru-RU").format(overpayment)} ₽
                    </h3>
                  </div>
                </div>
              </div>

              {/* <Link to="#">
                <img src={calendar} alt="calendar" /> График платежей
              </Link> */}

              <button onClick={() => setOpenModal(true)}>
                Оставить заявку
              </button>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;

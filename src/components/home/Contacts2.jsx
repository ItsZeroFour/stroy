import React, { useState } from "react";
import style from "./contacts2.module.scss";
import InputMask from "react-input-mask";
import arrowRight from "../../assets/icons/home/arrow-right-3.svg";
import { Link } from "react-router-dom";
import okey from "../../assets/icons/home/okey.svg";

const Contacts2 = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <section className={style.contacts}>
      <div className="container">
        <div className={style.contacts__wrapper}>
          <aside className={style.contacts__left}>
            <ul>
              <li>
                <div className={style.contacts__item__num}>
                  <h4>1</h4>
                </div>

                <div className={style.contacts__text}>
                  <h5>
                    Оставьте заявку и мы свяжемся с вами для обсуждения проекта
                  </h5>
                  <p>
                    Обсудим детали и подберем идеальный вариант для вашего
                    проекта
                  </p>
                </div>
              </li>

              <li>
                <div className={style.contacts__item__num}>
                  <h4>2</h4>
                </div>

                <div className={style.contacts__text}>
                  <h5>Согласуем и подпишем</h5>
                  <p>
                    Обговорим сроки работ, обсудим бюджет проекта и заключим
                    договор
                  </p>
                </div>
              </li>

              <li>
                <div className={style.contacts__item__num}>
                  <h4>3</h4>
                </div>

                <div className={style.contacts__text}>
                  <h5>Доставим и построим</h5>
                  <p>
                    Доставим материалы и проведем полный комплекс строительных
                    работ
                  </p>
                </div>
              </li>

              <li>
                <div className={style.contacts__item__num}>
                  <h4>4</h4>
                </div>

                <div className={style.contacts__text}>
                  <h5>Сдадим вовремя</h5>
                  <p>
                    Вовремя проведем сдачу работы И подпишем акт сдачи-приемки
                    дома
                  </p>
                </div>
              </li>
            </ul>

            {!isSuccess ? (
              <div className={style.contacts__right__content}>
                <h3>ЗАПОЛНИТЕ ФОРМУ ЗАЯВКИ </h3>
                <p>и мы вам перезвоним для обсуждения проекта</p>

                <form>
                  <InputMask
                    mask="+7 999 999 99 99"
                    placeholder="Ваш телефон"
                  />

                  <input type="text" placeholder="Ваше имя" />
                  <button type="button" onClick={() => setIsSuccess(true)}>
                    Оставить заявку <img src={arrowRight} alt="arrow right" />
                  </button>
                </form>

                <p className={style.contacts__policy}>
                  Нажимая кнопку “Оставить заявку”, вы соглашаетесь с{" "}
                  <Link to="/">Политикой конфиденциальности</Link>{" "}
                </p>
              </div>
            ) : (
              <div className={style.contacts__right__content}>
                <div className={style.modal__success}>
                  <img src={okey} alt="okey" />
                  <h3>ЗАЯВКА ОТПРАВЛЕНА</h3>
                  <p>
                    Мы уже получили вашу заявку и перезвоним вам через несколько
                    минут
                  </p>
                </div>
              </div>
            )}
          </aside>

          <aside className={style.contacts__right}>
            <h2>ВСЕГО НЕСКОЛЬКО ШАГОВ К ВАШЕМУ ДОМУ МЕЧТЫ</h2>

            <ul>
              <li>
                <div className={style.contacts__item__num}>
                  <h4>1</h4>
                </div>

                <div className={style.contacts__text}>
                  <h5>
                    Оставьте заявку и мы свяжемся с вами для обсуждения проекта
                  </h5>
                  <p>
                    Обсудим детали и подберем идеальный вариант для вашего
                    проекта
                  </p>
                </div>
              </li>

              <li>
                <div className={style.contacts__item__num}>
                  <h4>2</h4>
                </div>

                <div className={style.contacts__text}>
                  <h5>Согласуем и подпишем</h5>
                  <p>
                    Обговорим сроки работ, обсудим бюджет проекта и заключим
                    договор
                  </p>
                </div>
              </li>

              <li>
                <div className={style.contacts__item__num}>
                  <h4>3</h4>
                </div>

                <div className={style.contacts__text}>
                  <h5>Доставим и построим</h5>
                  <p>
                    Доставим материалы и проведем полный комплекс строительных
                    работ
                  </p>
                </div>
              </li>

              <li>
                <div className={style.contacts__item__num}>
                  <h4>4</h4>
                </div>

                <div className={style.contacts__text}>
                  <h5>Сдадим вовремя</h5>
                  <p>
                    Вовремя проведем сдачу работы И подпишем акт сдачи-приемки
                    дома
                  </p>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contacts2;

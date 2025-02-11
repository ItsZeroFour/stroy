import React, { useState } from "react";
import style from "./contacts.module.scss";
import contactsIcon1 from "../../assets/icons/home/contacts-icon-1.svg";
import contactsIcon2 from "../../assets/icons/home/contacts-icon-2.svg";
import contactsIcon3 from "../../assets/icons/home/contacts-icon-3.svg";
import InputMask from "react-input-mask";
import arrowRight from "../../assets/icons/home/arrow-right-3.svg";
import { Link } from "react-router-dom";
import okey from "../../assets/icons/home/okey.svg";

const Contacts = ({ targetRef }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <section className={style.contacts} ref={targetRef} id="contacts">
      <div className="container">
        <div className={style.contacts__wrapper}>
          <aside className={style.contacts__left}>
            <h2>КАТАЛОГ ПРОЕКТОВ <br /> ПОД ВАШ БЮДЖЕТ</h2>

            <ul>
              <li>
                <img src={contactsIcon1} alt="Консультация со специалистом" />

                <div className={style.contacts__text}>
                  <h5>Консультация со специалистом</h5>
                  <p>Ответим на все ваши вопросы технического характера</p>
                </div>
              </li>

              <li>
                <img src={contactsIcon2} alt="Консультация со специалистом" />

                <div className={style.contacts__text}>
                  <h5>Обсуждение ваших идей</h5>
                  <p>Подскажем, как лучше реализовать ваши идеи</p>
                </div>
              </li>

              <li>
                <img src={contactsIcon3} alt="Консультация со специалистом" />

                <div className={style.contacts__text}>
                  <h5>Выбор идеального варианта</h5>
                  <p>Подберем проект под ваш бюджет и ваши требования</p>
                </div>
              </li>
            </ul>
          </aside>

          <aside className={style.contacts__right}>
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

            <ul>
              <li>
                <img src={contactsIcon1} alt="Консультация со специалистом" />

                <div className={style.contacts__text}>
                  <h5>Консультация со специалистом</h5>
                  <p>Ответим на все ваши вопросы технического характера</p>
                </div>
              </li>

              <li>
                <img src={contactsIcon2} alt="Консультация со специалистом" />

                <div className={style.contacts__text}>
                  <h5>Обсуждение ваших идей</h5>
                  <p>Подскажем, как лучше реализовать ваши идеи</p>
                </div>
              </li>

              <li>
                <img src={contactsIcon3} alt="Консультация со специалистом" />

                <div className={style.contacts__text}>
                  <h5>Выбор идеального варианта</h5>
                  <p>Подберем проект под ваш бюджет и ваши требования</p>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

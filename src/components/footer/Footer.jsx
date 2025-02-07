import React, { useState } from "react";
import style from "./style.module.scss";
import InputMask from "react-input-mask";
import arrowRight from "../../assets/icons/home/arrow-right-3.svg";
import { Link } from "react-router-dom";
import okey from "../../assets/icons/home/okey.svg";
import logo from "../../assets/footer_logo.svg";
import vk from "../../assets/icons/footer/vk.svg";
import instagram from "../../assets/icons/footer/instagram.svg";
import youtube from "../../assets/icons/footer/youtube.svg";
import tg from "../../assets/icons/footer/tg.svg";

const Footer = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__wrapper}>
          <div className={style.footer__top}>
            {!isSuccess ? (
              <div className={style.footer__form}>
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
              <div className={style.footer__form}>
                <div className={style.contacts__right__content}>
                  <div className={style.modal__success}>
                    <img src={okey} alt="okey" />
                    <h3>ЗАЯВКА ОТПРАВЛЕНА</h3>
                    <p>
                      Мы уже получили вашу заявку и перезвоним вам через
                      несколько минут
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className={style.footer__contacts}>
              <h3>Контакты</h3>

              <ul>
                <li>
                  <p>Телефон</p>
                  <p>+7 900 000 00 00</p>
                </li>

                <li>
                  <p>Почта</p>
                  <p>exampletest@yandex.cоm</p>
                </li>

                <li>
                  <p>Адрес</p>
                  <p>
                    Чувашская республика, г. Чебоксары, ул. Пирогова, 1 корп. 3,
                    428034
                  </p>
                </li>

                <li>
                  <p>Реквизиты</p>
                  <p>ИП Степанов Денис Сергеевич ИНН 212306083987</p>
                </li>
              </ul>
            </div>
          </div>

          <div className={style.footer__socials}>
            <div className={style.footer__socials__left}>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>

              <div className={style.footer__socials__left__info}>
                <p>ИП Степанов Денис Сергеевич ИНН 212306083987</p>
              </div>

              <div className={style.footer__socials__phone}>
                <Link to="tel:+79672123132">+7 967 212 31 32</Link>
                <p>Пн - Вс с 8:00 до 18:00</p>
              </div>
            </div>

            <nav>
              <ul>
                <li>
                  <Link to="/">Главная</Link>
                </li>

                <li>
                  <Link to="/catalog">Каталог домов</Link>
                </li>

                <li>
                  <Link to="/about">О нас</Link>
                </li>
              </ul>
            </nav>

            <div className={style.footer__socials__right}>
              <h3>МЫ В СОЦСЕТЯХ</h3>

              <ul>
                <li>
                  <img src={vk} alt="vk" />
                  <p>ВКонтакте</p>
                </li>

                <li>
                  <img src={instagram} alt="instagram" />
                  <p>Instagram*</p>
                </li>

                <li>
                  <img src={youtube} alt="youtube" />
                  <p>YouTube</p>
                </li>

                <li>
                  <img src={tg} alt="tg" />
                  <p>Telegram</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={style.footer__copyright}>
          <Link to="/">Политика конфиденциальности</Link>
          <p>
            * - Социальная сеть Instagram принадлежит компании Meta, которая
            признана экстремистской, и запрещена на территории РФ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

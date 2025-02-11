import React, { useState } from "react";
import style from "./style.module.scss";
import modalImg from "../assets/images/home/modal-img.jpg";
import InputMask from "react-input-mask";
import arrowRight from "../assets/icons/home/arrow-right-3.svg";
import { Link } from "react-router-dom";
import xMark from "../assets/icons/home/x-mark.svg";
import okey from "../assets/icons/home/okey.svg";

const Modal = ({ setOpenModal }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className={style.modal}>
      <div className={style.modal__wrapper}>
        <div className={style.modal__content}>
          <img src={modalImg} alt="modal" />

          {!isSuccess ? (
            <div className={style.modal__content__form}>
              <button onClick={() => setOpenModal(false)}>
                <img src={xMark} loading="lazy" alt="close" />
              </button>

              <h3>ЗАПОЛНИТЕ ФОРМУ ЗАЯВКИ</h3>
              <p className={style.modal__content__text}>
                и мы вам перезвоним для обсуждения проекта
              </p>

              <form>
                <InputMask mask="+7 999 999 99 99" placeholder="Ваш телефон" />

                <input type="text" placeholder="Ваше имя" />
                <button type="button" onClick={() => setIsSuccess(true)}>
                  Оставить заявку <img src={arrowRight} alt="arrow right" />
                </button>
              </form>

              <p>
                Нажимая кнопку “Оставить заявку”, вы соглашаетесь с{" "}
                <Link to="/">Политикой конфиденциальности</Link>{" "}
              </p>
            </div>
          ) : (
            <div className={style.modal__success}>
              <button onClick={() => setOpenModal(false)}>
                <img src={xMark} alt="close" />
              </button>

              <img src={okey} loading="lazy" alt="okey" />
              <h3>ЗАЯВКА ОТПРАВЛЕНА</h3>
              <p>
                Мы уже получили вашу заявку и перезвоним вам через несколько
                минут
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

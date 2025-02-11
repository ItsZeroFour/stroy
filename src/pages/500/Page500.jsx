import React, { useEffect } from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const Page500 = () => {
  useEffect(() => {
    if (window.scrollY < 80) {
      window.scrollTo(0, 80);
    }
  }, []);

  return (
    <section className={style.not_found}>
      <div className="container">
        <div className={style.not_found__wrapper}>
          <h1>500</h1>
          <h4>Ошибка сервера</h4>
          <p>
            Похоже, на сервере произошла непредвиденная ошибка. Попробуйте
            вернутся на главную страницу. Если ошибка повторится, напишите нам
            об этом на почту
            <Link to="mailto:exampletest@ya.ru">exampletest@ya.ru</Link>
          </p>
          <Link to="/">Вернуться на главную</Link>
        </div>
      </div>
    </section>
  );
};

export default Page500;

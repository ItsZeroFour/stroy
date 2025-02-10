import React from "react";
import style from "./about.module.scss";
import ceoImg from "../../assets/images/about/CEO.png";

const AboutScreen = () => {
  return (
    <section className={style.about}>
      <div className="container">
        <div className={style.about__wrapper}>
          <div className={style.about__top}>
            <h2>НАШИ ЦЕННОСТИ</h2>
          </div>

          <div className={style.about__content}>
            <aside className={style.about__left}>
              <img src={ceoImg} alt="CEO" />
            </aside>

            <aside className={style.about__right}>
              <div className={style.about__right__top}>
                <h4>Руководитель Степанов Денис Сергеевич</h4>

                <ul>
                  <li>
                    <p>
                      Мы за честное строительство. Многие думают, что строители
                      всех обманывают. Я хочу изменить данное убеждение.
                    </p>
                  </li>

                  <li>
                    <p>
                      Мы придерживаемся принципа прозрачности и честности при
                      строительстве дома. Для этого предоставляем развернутые
                      сметы, чтобы клиент смог в этом убедиться
                    </p>
                  </li>

                  <li>
                    <p>
                      Ценим каждого нашего клиента и всегда готовы выслушать и
                      учесть все требования и пожелания, чтобы обеспечить
                      максимальную удовлетворенность от результатов нашей
                      работы.
                    </p>
                  </li>
                </ul>
              </div>

              <div className={style.about__right__item}>
                <h5>Наша цель</h5>
                <p>
                  Мы стремимся обеспечить клиентам комфорт и уверенность в том,
                  что их проект будет реализован профессионально и без лишних
                  вложений. 
                </p>
              </div>

              <div className={style.about__right__item}>
                <h5>Наши ценности</h5>
                <p>
                  Наш клиент прикладывает минимум усилий и получает максимальный
                  результат
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutScreen;

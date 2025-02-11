import React from "react";
import style from "./ourteam.module.scss";
import team1 from "../../assets/images/about/team-1.jpeg";
import team2 from "../../assets/images/about/team-2.jpeg";
import team3 from "../../assets/images/about/team-3.jpeg";
import team4 from "../../assets/images/about/team-4.jpeg";
import team5 from "../../assets/images/about/team-5.jpeg";
import team6 from "../../assets/images/about/team-6.jpeg";
import team7 from "../../assets/images/about/team-7.jpeg";

const OurTeam = () => {
  const teamList = [
    {
      img: team1,
      name: "Степанов Денис",
      status: "Основатель и владелец компании",
    },

    {
      img: team2,
      name: "Романов Даниил",
      status: "Генеральный директор",
    },

    {
      img: team3,
      name: "Степанова Оксана",
      status: "Финансовый директор",
    },

    {
      img: team4,
      name: "Семенов Максим",
      status: "Производитель работ",
    },

    {
      img: team5,
      name: "Земсков Дмитрий",
      status: "Руководитель проектного отдела",
    },

    {
      img: team6,
      name: "Пчельникова Снежана",
      status: "Руководитель отдела продаж",
    },

    {
      img: team7,
      name: "Анисимов Андрей",
      status: "Технический директор",
    },
  ];

  return (
    <section className={style.ourteam}>
      <div className="container">
        <div className={style.ourteam__wrapper}>
          <div className={style.ourteam__top}>
            <h2>НАША КОМАНДА</h2>
          </div>

          <ul>
            {teamList.map(({ img, name, status }) => (
              <li key={name + status}>
                <img src={img} alt={name} />
                <h5>{name}</h5>
                <p>{status}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

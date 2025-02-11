import React, { useEffect } from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const Loading = () => {
  useEffect(() => {
    if (window.scrollY < 80) {
      window.scrollTo(0, 80);
    }
  }, []);

  return (
    <section className={style.not_found}>
      <div className="container">
        <div className={style.not_found__wrapper}>
          <section>
            <span class={style.loader__3}>
              
            </span>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Loading;

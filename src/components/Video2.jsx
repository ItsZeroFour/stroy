import React from "react";
import style from "./style.module.scss";

const Video2 = ({ setOpenVideo }) => {
  return (
    <div className={style.video}>
      <div className={style.video__wrapper}>
        <button
          className={style.video__close}
          onClick={() => setOpenVideo(false)}
        >
          <div></div>
        </button>

        <iframe
          src="https://vk.com/video_ext.php?oid=-56169357&id=456265248&hd=2&autoplay=1"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video2;

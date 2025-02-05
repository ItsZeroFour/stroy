import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Modal from "./components/Modal";
import { useEffect, useRef, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const scrollRef = useRef(null);

  /* Disable scroll */
  useEffect(() => {
    if (openModal) {
      const preventScroll = (event) => event.preventDefault();

      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      document.body.style.overflowY = "hidden";

      return () => {
        window.removeEventListener("wheel", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
        document.body.style.overflowY = "auto";
      };
    }
  }, [openModal]);

  // useEffect(() => {
  //   if (scrollRef.current) {
  //     const scroll = new LocomotiveScroll({
  //       el: scrollRef.current,
  //       smooth: true,
  //       multiplier: 0.5, // Уменьшение скорости скролла для более плавного эффекта
  //     });

  //     return () => scroll.destroy();
  //   }
  // }, []);

  return (
    <div className="App">
      {/* <LocomotiveScrollProvider
        options={{
          smooth: true,
          multiplier: 0.5, // Уменьшение скорости скролла для более плавного эффекта
        }}
        watch={[]}
        containerRef={scrollRef}
      > */}
      <div className="page" ref={scrollRef} data-scroll-container>
        <Header setOpenModal={setOpenModal} />

        <main>
          {openModal && <Modal setOpenModal={setOpenModal} />}

          <Routes>
            <Route
              path="/"
              element={
                <Home setOpenModal={setOpenModal} openModal={openModal} />
              }
            />
          </Routes>
        </main>
      </div>
      {/* </LocomotiveScrollProvider> */}
    </div>
  );
}

export default App;

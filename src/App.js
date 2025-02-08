import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Modal from "./components/Modal";
import { useEffect, useRef, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Footer from "./components/footer/Footer";
import Catalog from "./pages/catalog/Catalog";
import Project from "./pages/project/Project";
import About from "./pages/about/About";
import ScrollToTop from "./utils/ScrollToTop";
import NotFound from "./pages/not_found/NotFound";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const scrollRef = useRef(null);

  const targetRef = useRef(null);

  const scrollToElement = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const targetRef2 = useRef(null);

  const scrollToElement2 = () => {
    targetRef2.current?.scrollIntoView({ behavior: "smooth" });
  };

  const targetRef3 = useRef(null);

  const scrollToElement3 = () => {
    targetRef3.current?.scrollIntoView({ behavior: "smooth" });
  };

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
        <ScrollToTop />
        <Header
          setOpenModal={setOpenModal}
          scrollToElement={scrollToElement}
          scrollToElement2={scrollToElement2}
          scrollToElement3={scrollToElement3}
        />
        <main>
          {openModal && <Modal setOpenModal={setOpenModal} />}

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  setOpenModal={setOpenModal}
                  openModal={openModal}
                  targetRef={targetRef}
                  targetRef2={targetRef2}
                  targetRef3={targetRef3}
                />
              }
            />
            <Route
              path="/catalog"
              element={<Catalog setOpenModal={setOpenModal} />}
            />
            <Route
              path="/project"
              element={<Project setOpenModal={setOpenModal} />}
            />
            <Route
              path="/about"
              element={<About setOpenModal={setOpenModal} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      {/* </LocomotiveScrollProvider> */}
    </div>
  );
}

export default App;

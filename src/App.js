import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);

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

  return (
    <div className="App">
      <div className="page">
        <Header />

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
    </div>
  );
}

export default App;

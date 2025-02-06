import React from "react";
import Head from "../../components/home/Head";
import Advantages from "../../components/home/Advantages";
import Services from "../../components/home/Services";
import Catalog from "../../components/home/Catalog";
import Mortgage from "../../components/home/Mortgage";
import Calculator from "../../components/home/Calculator";
import Contacts from "../../components/home/Contacts";
import About from "../../components/home/About";
import Completed from "../../components/home/Completed";
import Contacts2 from "../../components/home/Contacts2";
import WhyWe from "../../components/home/WhyWe";
import Reviews from "../../components/home/Reviews";
import Questions from "../../components/home/Questions";

const Home = ({ openModal, setOpenModal }) => {
  return (
    <React.Fragment>
      <Head />
      <Advantages />
      <Services setOpenModal={setOpenModal} />
      <Catalog />
      <Mortgage setOpenModal={setOpenModal} />
      <Calculator setOpenModal={setOpenModal} openModal={openModal} />
      <Contacts />
      <About />
      <Completed />
      <Contacts2 />
      <WhyWe />
      <Reviews />
      <Questions />
    </React.Fragment>
  );
};

export default Home;

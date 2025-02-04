import React from "react";
import Head from "../../components/home/Head";
import Advantages from "../../components/home/Advantages";
import Services from "../../components/home/Services";
import Catalog from "../../components/home/Catalog";
import Mortgage from "../../components/home/Mortgage";
import Calculator from "../../components/home/Calculator";

const Home = ({ openModal, setOpenModal }) => {

  return (
    <React.Fragment>
      <Head />
      <Advantages />
      <Services setOpenModal={setOpenModal} />
      <Catalog />
      <Mortgage />
      <Calculator setOpenModal={setOpenModal} openModal={openModal} />
    </React.Fragment>
  );
};

export default Home;

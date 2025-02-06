import React from "react";
import Head from "../../components/project/Head";
import Description from "../../components/project/Description";
import Contacts2 from "../../components/home/Contacts2";
import Mortgage from "../../components/project/Mortgage";
import Calculator from "../../components/home/Calculator";
import Catalog from "../../components/project/Catalog";

const Project = ({ setOpenModal }) => {
  return (
    <React.Fragment>
      <Head />
      <Description setOpenModal={setOpenModal} />
      <Contacts2 />
      <Mortgage setOpenModal={setOpenModal} />
      <Calculator setOpenModal={setOpenModal} />
      <Catalog />
    </React.Fragment>
  );
};

export default Project;

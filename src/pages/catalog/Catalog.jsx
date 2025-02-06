import React from "react";
import Head from "../../components/catalog/Head";
import CatalogList from "../../components/catalog/CatalogList";
import Mortgage from "../../components/catalog/Mortgage";
import Calculator from "../../components/home/Calculator";

const Catalog = ({ setOpenModal }) => {
  return (
    <React.Fragment>
      <Head />
      <CatalogList />
      <Mortgage setOpenModal={setOpenModal} />
      <Calculator setOpenModal={setOpenModal} />
    </React.Fragment>
  );
};

export default Catalog;

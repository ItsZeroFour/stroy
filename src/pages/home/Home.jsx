import React from "react";
import Head from "../../components/home/Head";
import Advantages from "../../components/home/Advantages";
import Services from "../../components/home/Services";
import Catalog from "../../components/home/Catalog";
import Mortgage from "../../components/home/Mortgage";

const Home = () => {
  return (
    <React.Fragment>
      <Head />
      <Advantages />
      <Services />
      <Catalog />
      <Mortgage />
    </React.Fragment>
  );
};

export default Home;

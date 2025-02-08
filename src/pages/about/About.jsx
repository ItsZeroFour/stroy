import React from "react";
import Head from "../../components/about/Head";
import AboutScreen from "../../components/about/About";
import Zifrs from "../../components/about/Zifrs";
import Contacts from "../../components/home/Contacts";
import WhyWe from "../../components/about/WhyWe";
import Reviews from "../../components/about/Reviews";
import OurTeam from "../../components/about/OurTeam";
import Mortgage from "../../components/about/Mortgage";
import Calculator from "../../components/home/Calculator";

const About = ({ setOpenModal }) => {
  return (
    <React.Fragment>
      <Head />
      <AboutScreen />
      <Zifrs />
      <Contacts setOpenModal={setOpenModal} />
      <WhyWe />
      <Reviews />
      <OurTeam />
      <Mortgage setOpenModal={setOpenModal} />
      <Calculator setOpenModal={setOpenModal} />
    </React.Fragment>
  );
};

export default About;

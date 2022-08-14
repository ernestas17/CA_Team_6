import React from "react";
import Card from "../components/Card/Card";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { CarIcon } from "../assets/svgs/svgs";

const HomePage = () => {
  return (
    <>
      <Header />
      <div style={{ width: "316px", height: "232px" }}>
        <Card icon={<CarIcon />} text={"Diagnostics"} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

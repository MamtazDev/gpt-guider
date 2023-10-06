import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Main;

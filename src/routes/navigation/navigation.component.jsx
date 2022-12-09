import { useState, Fragment, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

import "./navigation.styles.scss";
import Header from "../../components/header/header.component";
import Hero from "../../components/hero/hero.component";
import Footer from "../../components/footer/footer.component";

const Navigation = () => {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <Hero />
        <Outlet />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Navigation;

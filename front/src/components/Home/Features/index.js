import React from "react";

import "./style.scss";
import SingleButton from "components/UI/Buttons/SingleButton";

const HomeFeatures = () => (
  <div className="home-cta">
    <SingleButton text="Log in" href="/login" size="lg" />
  </div>
);

export default HomeFeatures;

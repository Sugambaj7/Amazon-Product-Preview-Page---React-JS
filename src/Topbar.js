import React from "react";

import classes from "./Topbar.module.css";

const Topbar = () => {
  const logoImg = {
    imageUrl: "https://i.imgur.com/6Nan7cC.png",
  };
  return (
    <header className="App-header">
      <nav className={classes.Topbar}>
        <img src={logoImg.imageUrl} alt="Amazon Logo" srcset="" />
      </nav>
    </header>
  );
};
export default Topbar;

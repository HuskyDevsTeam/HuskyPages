import React, { useContext } from "react";
import "./styles.css";
import HeaderSocials from "./HeaderSocials";
import ThemeContext from "../../context/Context";

function Header() {
  const { style } = useContext(ThemeContext);
  return (
    <header id="header" style={style}>
      <div className="header__container container">
        <h5>Welcome, we are</h5>
        <h1 className="title" style={{paddingBottom:0}}>
          <span className="name">HUSKY</span>DEVS
        </h1>
        <h5>Build the application of your dreams!</h5>
        <HeaderSocials />
        <div className="me">
          <img src="img/husky_isologo.png" alt="yo" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;

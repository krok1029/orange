// import React, { useState, useEffect } from "react";
import footerLogo from "../../images/logo.png";

function NavLogo(props) {
  return (
    <>
      <a>
        <div className="navLogo">
          <img src={footerLogo} />
        </div>
      </a>
    </>
  );
}

export default NavLogo;

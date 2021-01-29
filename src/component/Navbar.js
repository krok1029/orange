import React, { useState, useEffect } from "react";
import Member from "./navbar/Member";
import Menu from "./navbar/Menu";
import NavLogo from "./navbar/NavLogo";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <NavLogo />
        <Menu />
        <Member />
      </div>
    </>
  );
}

export default Navbar;

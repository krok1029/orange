import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Member from "./Member";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Menu />
        <Member />
      </div>
    </>
  );
}

export default Navbar;

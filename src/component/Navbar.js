import React, { useState, useEffect } from "react";
import Member from "./navbar/Member";
import Menu from "./navbar/Menu";

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

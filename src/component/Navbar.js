import React, { useState, useEffect } from "react";
import Member from "./navbar/Member";
import Menu from "./navbar/Menu";
import NavLogo from "./navbar/NavLogo";

function Navbar() {
  useEffect(() => {
    const menuClass = document.querySelector(".navbarMenu").classList;
    window.addEventListener("scroll", () => {
      window.scrollY != 0
        ? menuClass.add("navbarMenuScroll")
        : menuClass.remove("navbarMenuScroll");
    });
    return () => {};
  }, []);
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

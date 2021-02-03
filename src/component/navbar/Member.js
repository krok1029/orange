// import React, { useState, useEffect } from "react";
import { GoPerson } from "react-icons/go";
import { IoCartSharp } from "react-icons/io5";
function Member(props) {
  const slr = (id) => document.querySelector(id);
  return (
    <>
      <div className="navbarMember">
        <a
          className="memberIcon"
          onClick={() => {
            slr(".loginBlock").classList.add("loginAreaAppear");
            slr(".blackBlock").classList.add("blackBlockAppear");
            return false;
          }}
        >
          <GoPerson color={"#591f00"} size={20} />
        </a>
        <a className="memberIcon">
          <IoCartSharp color={"#591f00"} size={20} />
          <span>(0)</span>
        </a>
      </div>
    </>
  );
}

export default Member;

// import React, { useState, useEffect } from "react";
import { GoPerson } from "react-icons/go";
import { IoCartSharp } from "react-icons/io5";
function Member(props) {
  const slr = (id) => document.querySelector(id);
  return (
    <>
      <div className="navbarMember">
        <a href="##" className="memberIcon">
          <GoPerson
            color={"#591f00"}
            size={20}
            onClick={() => {
              slr(".loginBlock").classList.add("loginAreaAppear");
              slr(".blackBlock").classList.add("blackBlockAppear");
            }}
          />
        </a>
        <a href="" className="memberIcon">
          <IoCartSharp color={"#591f00"} size={20} />
          <span>(0)</span>
        </a>
      </div>
    </>
  );
}

export default Member;

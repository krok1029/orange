import React, { useState, useEffect } from "react";
import { GoPerson } from "react-icons/go";
import { IoCartSharp } from "react-icons/io5";
function Member(props) {
  return (
    <>
      <div className="navbarMember">
        <div className="memberIcon">
          <GoPerson color={"#591f00"} size={20} />
        </div>
        <div className="memberIcon">
          <IoCartSharp color={"#591f00"} size={20} />
          <span>(0)</span>
        </div>
      </div>
    </>
  );
}

export default Member;

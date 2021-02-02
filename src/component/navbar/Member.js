// import React, { useState, useEffect } from "react";
import { GoPerson } from "react-icons/go";
import { IoCartSharp } from "react-icons/io5";
function Member(props) {
  return (
    <>
      <div className="navbarMember">
        <a href="##" className="memberIcon">
          <GoPerson
            color={"#591f00"}
            size={20}
            onClick={() =>
              document
                .querySelector(".loginBlock")
                .classList.add("loginAreaAppear")
            }
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

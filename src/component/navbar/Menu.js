import React, { useState, useEffect } from "react";

function Menu(props) {
  return (
    <>
      <div className="navbarMenu">
        <ul>
          <li>
            <a href="">橙子傳承</a>
          </li>
          <li>
            <a href="">橙子選擇</a>
          </li>
          <li>
            <a href="">橙子推薦</a>
          </li>
          <li>
            <a href="">橙子通告</a>
          </li>
          <li>
            <a href="">橙子來往</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;

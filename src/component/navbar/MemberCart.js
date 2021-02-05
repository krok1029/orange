import React, { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";

function MemberCart(props) {
  const slr = (id) => document.querySelector(id);
  return (
    <>
      <div className="cartBlock">
        <div className="CloseArea">
          <a
            className="loginClose"
            onClick={() => {
              slr(".loginBlock").classList.remove("loginAreaAppear");
              slr(".blackBlock").classList.remove("blackBlockAppear");
            }}
          >
            <GrClose size={25} />
            <div>CLOSE</div>
          </a>
        </div>
        <div className="loginArea">
          <form action="">
            <h3>會員登入</h3>
            <div className="formArea">
              <div className="group">
                <label>帳 號</label>
                <input type="text" placeholder="輸入您的E-mail" />
              </div>
              <div className="group">
                <label>密 碼</label>
                <input type="password" placeholder="輸入您的密碼" />
              </div>
              <div className="group">
                <label>驗證碼</label>
                <input type="text" />
              </div>
            </div>
            <a className="btn">登　入</a>
            <a className="btn signUp">加入會員</a>
            <div className="other">
              <a>忘記密碼</a>
              <span> | </span>
              <a>重發確認信</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MemberCart;

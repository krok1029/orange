import footerLogo from "../images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

function Footer() {
  return (
    <footer className="footerFrame">
      <div className="footerUp">
        <div className="container">
          {/* <div className="logo"> */}
          <img src={footerLogo} alt="footerLogo" className="logo" />
          {/* </div> */}
          <div className="addr">541南投縣中寮鄉中寮村鄉林巷17之1號</div>
          <div className="tel">
            連絡電話
            <a href="tel://0932123456">0922-440001</a> |
            <a href="tel://0932123456">0989-905123</a>
          </div>

          <div className="mail">
            <a href="mailto:sdsdafhu@icloud.com?subject=%E8%8A%B3%E9%9C%96%E8%BE%B2%E5%A0%B4_">
              laaaa@icloud.com​
            </a>
          </div>
          <div className="social">
            <a href="https://www.facebook.com" className="fb">
              <FaFacebookF />
              粉絲專頁
            </a>
          </div>
          <div className="sub">
            <input type="text" placeholder="電子報 / 請輸入 E-MAIL" />
            <div>
              <a href=" ">訂閱</a>
              <a href=" ">退訂</a>
            </div>
          </div>
        </div>
        <div className="feet">
          <IoMdLock />
          採用全球最先進SSL 256bit | 建議使用Chrome、Firefox、Safari最新版本瀏覽
          | Design by OrangeThief-SS105
        </div>
      </div>
    </footer>
  );
}

export default Footer;

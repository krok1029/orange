import footerLogo from "../images/logo.png";

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
              粉絲專頁
            </a>
          </div>
          <div className="sub"></div>
        </div>
        <div className="feet"></div>
      </div>
    </footer>
  );
}

export default Footer;

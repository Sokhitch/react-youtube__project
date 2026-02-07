import "./Footer.scss";

function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrap">
          <p>© {getYear()} Copyright Text</p>
          <a className="footer__link" href="https://t.me/egor_frontend_dev">
            https://t.me/ndwmnt
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

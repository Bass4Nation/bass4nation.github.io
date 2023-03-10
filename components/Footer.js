import style from "../styles/Footer.module.css"


const Footer = ({isMobile}) => {

  const footer = isMobile ? style.footer_mobile : style.footer_desktop

  


  return (
    <footer className={footer}>
      <p>
        E-mail: <a href="mailTo:bass4nation@gmail.com">bass4nation@gmail.com</a>
      </p>
      <p>
        Phone: <a href="tel:+4798037897">+47 980 37 897 </a>
      </p>
      <p>
        Github: <a href="https://github.com/Bass4Nation">Bass4Nation</a>
      </p>
      {/* <input type="button" value={languageText} onClick={changeLanguage} /> */}
    </footer >
  );
};

export default Footer;

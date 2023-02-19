import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer">
        <span>Made with </span> &nbsp;
        <span className="react">React </span>
        <span>at </span> &nbsp;
        <a href="https://www.lereacteur.io/" target="blank">
          Le Reacteur
        </a>
        &nbsp;
        <span> by </span> &nbsp;
        <a href="https://github.com/sergemirouse" target="blank">
          Serge Mirouse
        </a>
      </div>
    </section>
  );
};

export default Footer;

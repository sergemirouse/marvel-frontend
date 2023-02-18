import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer">
        <span>Made with </span>
        <span className="react">React </span>
        <span>at </span>
        <a href="https://www.lereacteur.io/" target="blank">
          Le Reacteur
        </a>
        <span> by </span>
        <a href="https://github.com/sergemirouse" target="blank">
          Serge Mirouse
        </a>
      </div>
    </section>
  );
};

export default Footer;

import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      &copy; 2025 Moath Alwahidi.
      <br />
      E-mail: <a href="mailto:moazalwahidi@gmail.com">
        moazalwhaidi@gmail.com
      </a>{" "}
      <br />
      <a
        href="https://www.linkedin.com/in/moath-alwahidi/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#0b549cff",
          textDecoration: "none",
          marginLeft: "5px",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/24/174/174857.png"
          alt="LinkedIn"
          style={{ verticalAlign: "middle", marginRight: "5px" }}
        />
        LinkedIn
      </a>
    </div>
  );
};

export default Footer;

import "./css/Contact.css";
import Header from "./Header";
import Contactimage from "../assets/Contact-image.png";

// Social Media Icons
import instagramlogo from "../assets/Social Media/instagram.svg";
import linkedinlogo from "../assets/Social Media/linkedin.svg";
import githublogo from "../assets/Social Media/github.svg";
import maillogo from "../assets/Social Media/mail.svg";
import leetcodelogo from "../assets/Social Media/leetcode.svg";

const Contact = () => {
  return (
    <>
      <Header />
      <div
        className="contactcontent"
        style={{
          backgroundImage: `url(${Contactimage})`,
        }}
      >
        <h1>Reach me through my Social Media Handles</h1>
        <h2>I look forward to New Projects and Collaborations</h2>
        <div className="box">
          <div className="cards">
            <a
              href="https://www.linkedin.com/in/barathbalasundaram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinlogo} alt="" width="18%" />
              Linkedin
            </a>
          </div>
          <div className="cards">
            <a
              href="https://github.com/htarab-b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githublogo} alt="" width="18%" className="githublogo" />
              GitHub
            </a>
          </div>
        </div>
        <div className="boxright">
          <div className="cards">
            <a
              href="mailto:barathb.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mail
              <img src={maillogo} alt="" width="18%" />
            </a>
          </div>
          <div className="cards">
            <a
              href="https://www.instagram.com/htarab_b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
              <img src={instagramlogo} alt="" width="18%" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

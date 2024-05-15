import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer_section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-link-div">
            <h4>For Buisness</h4>
            <a href="/empoyer">
              <p>Employer</p>
            </a>
            <a href="/empoyer">
              <p>Employer</p>
            </a>
            <a href="/empoyer">
              <p>Employer</p>
            </a>
          </div>
          <div className="sb_footer-link_div">
            <h4>Recources</h4>
            <a href="/resource">
              <p>Employer</p>
            </a>
            <a href="/rsource">
              <p>Employer</p>
            </a>
            <a href="/rsource">
              <p>Employer</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Partners</h4>
            <a href="/resource">
              <p>Employer</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Company</h4>
            <a href="/About">
              <p>Employer</p>
            </a>
            <a href="/Press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Comming soon on</h4>
            <div className="Socialmedia">
              <a>
                <FontAwesomeIcon icon={faGithubSquare} />
                mouinbhm
              </a>
              <br />
              <a>
                <FontAwesomeIcon icon={faGithubSquare} />
                raedLZ
              </a>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb_footer-below">
          <div className="db_footer-copyright">
            <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

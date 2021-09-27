import React from "react";
import { useMediaQuery } from "react-responsive";

import {
  footerSection,
  stayInLoop,
  mainFooterDiv,
  logoDiv,
  contactFollowDiv,
  contactDiv,
  followDiv,
  linksImgDiv,
  stayInLoopMob,
} from "./footer.module.scss";

import prommotoLogo from "assets/prommotoLogo.svg";
import fb from "assets/fb.svg";
import inst from "assets/inst.svg";
import linkedin from "assets/iconmonstr-linkedin-3.svg";

const Footer = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1025px)",
  });

  return (
    <footer className={footerSection}>
      {isTablet ? (
        <>
          <div className={stayInLoopMob}>
            <div>
              <input type="email" required placeholder="Enter your email..." />
              <button>Stay in the Loop</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={stayInLoop}>
            <input type="email" placeholder="Enter Email Address" />
            <button>
              <span>Stay in the Loop</span>
            </button>
          </div>
        </>
      )}

      <div className={mainFooterDiv}>
        <div className={logoDiv}>
          <img src={prommotoLogo} alt="logo" />
          <p>© 2021 All Rights Reserved</p>
        </div>
        <div className={contactFollowDiv}>
          <div className={contactDiv}>
            <h4>Contact Us</h4>
            <div>
              <a href="mailto:hello@prommoto.com">hello@prommoto.com</a>
              {/* <p>+218928607817</p> */}
            </div>
          </div>
          <div className={followDiv}>
            <h5>Follow Us</h5>
            <div className={linksImgDiv}>
              <a
                href="https://www.facebook.com/Prommoto-111269120540732"
                target="_blank"
                rel="noreferrer"
              >
                <img src={fb} alt="" height="27" width="27" />
              </a>
              <a
                href="https://www.instagram.com/prommotobrands/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={inst} alt="" height="27" width="27" />
              </a>
              <a
                href="https://www.linkedin.com/company/prommoto"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="" height="26" width="26" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

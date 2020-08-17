import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";

export default function Header(props) {
  const [alert, setAlert] = useState(false);
  const { resumeData } = props;

  return (
    <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a href="#home" alt="home">
                Home
              </a>
            </li>
            <li>
              <a href="https://mattborghi.github.io/CV" alt="cv">
                CV
              </a>
            </li>
            <li>
              <a href="https://mattborghi.github.io/blog" alt="blog">
                Blog
              </a>
            </li>
            <li>
              <a
                href="#projects"
                alt="projects"
                onClick={() => setAlert((alert) => !alert)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#french"
                alt="french"
                onClick={() => setAlert((alert) => !alert)}
              >
                French
              </a>
            </li>
            <li>
              <a href="https://mattborghi.github.io/violin" alt="violin">
                Violin
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h2 className="responsive-headline"> Hello, my name is </h2>
            <h1 className="responsive-headline"> {resumeData.name}.</h1>
            <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
              I am a {resumeData.role}. {resumeData.roleDescription}
            </h3>
            <hr />
            <ul className="social">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={item.className}></i>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </header>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={alert}
        onClose={() => setAlert((alert) => !alert)}
        message="Page not yet implemented!"
        key="snackbar"
        autoHideDuration={5000}
      />
    </React.Fragment>
  );
  // }
}

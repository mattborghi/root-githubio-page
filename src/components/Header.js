import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import Snackbar from "@mui/material/Snackbar";

export default function Header({ resumeData, buttons }) {
  const [alert, setAlert] = useState(false);

  return (
    <React.Fragment>
      <header id="home">

        <NavigationBar buttons={buttons} />

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
}

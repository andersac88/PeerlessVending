import React from "react";
import "./style.css";

function Footer() {
  return (
    <div id="footer" className="card-footer text-muted">
    <div className="row">
      <div className="col-sm">A percentage of all proceeds is donated to <a href="https://www.thenccs.org/">The National Children's Cancer Society</a>
      <hr></hr>
      </div>
      <div className="col-sm"></div>
    </div>
    <div className="row">
      <div className="col-sm">
        &#9400;Copyright 2019 by Peerless Vending | web design by Andrew Inc.
      </div>
    </div>
  </div>
  );
}

export default Footer;

import React from "react";
import "./style.css";

function Footer() {
  return (
    <div id="footer" className="card-footer text-muted">
    <div className="row">
      <div className="col-sm-8">
        <div className="row top">A percentage of all proceeds is donated to <a href="https://www.thenccs.org/">The National Children's Cancer Society</a>
      </div>
     
      <div className="row">        &#9400;Copyright 2019 by Peerless Vending | web design by Andrew Inc.</div>
      </div>
      <div className="col-sm social">Connect with Us: <a href="#" ><i className="fab fa-facebook-square"></i></a></div>
    </div>
    </div>
  );
}

export default Footer;

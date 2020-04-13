import React from "react";
import "./style.css";

function Footer() {
  return (
    <div id="footer" className="card-footer text-muted">
    <div className="row">
      <div className="col-sm-6">
        <div className="row top">A percentage of all proceeds is donated to{'\u00A0'}<a href="https://www.thenccs.org/">The National Children's Cancer Society</a>
      </div>
     
      <div className="row" id="copy"> &#9400;Copyright 2020 by Peerless Vending | web design by {'\u00A0'}<a  style={{color: "inherit"}} href="https://wwww.AndrewCAndersen.com">AA</a></div>
      </div>
      <div className="col-sm my-auto text-right">Connect with Us</div>
      <div className="col-sm my-auto">
        <a className="fab" href="https://www.facebook.com/PeerlessVending/" ><i className="fab fa-facebook-square"></i></a>
      {'\u00A0'}
        <a className="fab" href="https://www.instagram.com/peerlessvending/"><i className="fab fa-instagram-square"></i></a>
      </div>
    </div>
    </div>
  );
}

export default Footer;

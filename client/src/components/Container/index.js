import React from "react";
import "./style.css";

function Container(props) {
  return (
        <div id="repeatContainer" className="row">
            <div className="col">
                <div id="repeatDiv">{props.side1}</div>
            </div>
            <div className="col">
            <div id="repeatDiv">{props.side2}</div>
            </div>
    </div>
  );
}

export default Container;

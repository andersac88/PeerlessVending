import React from "react";
import {Button} from "react-bootstrap"
import "./style.css";

export function Input(props) {
    return (
    <div className="form-group">
        <input className="form-control" {...props} />
    </div>
    );
}

export function TextArea(props) {
    return (
        <div className="form=group">
            <textarea className="form-control" rows="7" {...props} /> 
        </div>
    )
}

export function FormButton(props) {
    return (
        <Button id="formButton" {...props} style={{margin: 9}} >{props.children} </Button>
    )
}
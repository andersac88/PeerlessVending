import React from "react";

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
        <button script={console.log(props.children)} {...props} className="btn btn-primary">{props.children} </button>
    )
}
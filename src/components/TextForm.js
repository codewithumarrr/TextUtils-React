import React from "react";
import { useState } from "react";
import "./TextForm.css";

export default function TextForm(props) {
  const [text, setText] = useState("");

  function onClickHandler() {
    if (text === "") {
      alert("Please Write something first.");
    }
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to UpperCase","success");
  }

  function onClickHandlerL() {
    setText(text.toLowerCase());
    props.showAlert("Text converted to Lower Case","success");
  }

  function onChangeHandler(event) {
    setText(event.target.value);
  }

  function extraSpacesHandler(){
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed","success");
  }
  function copyHandler(){
    let text = document.getElementById("textBox");
    text.select()
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard","success");
  }

  return (
    <React.Fragment>
      <div style={ {color: props.toggleMode === 'dark'? 'white':"black"} }>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="textBox" className="form-label">
            <h3>Enter Text To Analyze Below</h3>
          </label>

          <textarea
            className="form-control border-radius"
            placeholder="Enter you Text here."
            id="textBox"
            style={props.toggleMode === "dark" ? {backgroundColor:"#2a291f",color:"white"}:
          {backgroundColor:"white",color:"black"}}
            onChange={onChangeHandler}
            rows="8"
            value={text}
          ></textarea>

          <div className="container my-3">
          <button disabled={text.length===0} className="btn btn-primary" onClick={onClickHandler}>
            Text to Upper
          </button>
          <button className="btn btn-primary fun" disabled={text.length===0} onClick={onClickHandlerL}>
            Text to Lower
          </button>
          <button className="btn btn-primary fun" disabled={text.length===0} onClick={copyHandler}>
            Copy Text
          </button>          
          <button className="btn btn-primary fun" disabled={text.length===0} onClick={extraSpacesHandler}>
            Remove Spaces
          </button>
          <button disabled={text.length===0}
            className="btn btn-primary fun onReset"
            onClick={onClickReset}
          >
            Reset
          </button>
          </div>
        </div>

      </div>

      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          words {text.split(" ").filter((element)=> element.length>0).length} , characters {text.length}{" "}
        </p>
        <p>{text.split(" ").filter((element)=> element.length>0).length *0.008 } Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : "Please Enter Something to See its Preview"}</p>
      </div>
      </div>
    </React.Fragment>
  );

  function onClickReset() {
    setText("");
  }


}

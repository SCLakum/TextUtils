import React, { useState } from "react";
import AlertMsg from "./AlertMsg.js";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const AreaTextChange = (e) => {
    setText(e.target.value);
  };

  const ConverUpprCase = () => {
    setText(text.toUpperCase());
    return text.trim().length > 0 ? "success" : "error";
  };

  const ConverLowerCase = () => {
    setText(text.toLowerCase());
    return text.trim().length > 0 ? "success" : "error";
  };

  const CopyText = () => {
    navigator.clipboard.writeText(text);
    return text.trim().length > 0 ? "success" : "error";
  };

  const RemoveExtraSpace = () => {
    let newTextArr = text.trim().split(/[ ]+/);
    setText(newTextArr.join(" "));
    return text.trim().length > 0 ? "success" : "error";
  };

  const ClearText = () => {
    setText("");
    return "success";
  };

  return (
    <div className="container">
      <h1 className="my-3">{props.headerName}</h1>
      <div className="mb-3">
        <textarea
          className="form-control my-2"
          rows="5"
          value={text}
          onChange={AreaTextChange}
        ></textarea>

        <div className="d-flex">
          <AlertMsg BtnFun={ConverUpprCase} btnName="Convert To Uppercase" themeType={props.theme} msg="Suseesfully conver to Uppercase!" />
          <AlertMsg BtnFun={ConverLowerCase} btnName="Convert To Lowercase" themeType={props.theme} msg="Suseesfully conver to Lowercase!" />
          <AlertMsg BtnFun={CopyText} btnName="Copy Text" themeType={props.theme} msg="Suseesfully Copy!" />
          <AlertMsg BtnFun={RemoveExtraSpace} btnName="Remove Extra Spaces" themeType={props.theme} msg="Suseesfully remove extra space!" />
          <AlertMsg BtnFun={ClearText} btnName="Clear Text" themeType={props.theme} msg="Suseesfully Clear!" />
        </div>


        <div className="container my-2">
          <h2>Your text summary</h2>
          <p>
            {text.trim() !== "" ? text.trim().split(/\s+/).filter(word => word !== "").length : 0} words and {text.length} characters
          </p>
          <p>Estimated time to read word: {(text.trim() !== "" ? text.trim().split(/\s+/).filter(word => word !== "").length : 0) / 125} minutes </p>
          <h3>Priview</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

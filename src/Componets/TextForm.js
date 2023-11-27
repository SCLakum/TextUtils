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

  const ReverceString = () => {
    let tempStr = text;
    setText(tempStr.split("").reverse().join(""));
    return text.trim().length > 0 ? "success" : "error";
  };

  function extractEmails(text) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const emails = text.match(emailRegex);

    return emails || [];
  }

  const getEmails = () => {
    setText((extractEmails(text)).join(" "));
    return text.trim().length > 0 ? "success" : "error";
  }

  const extractNumbers = () => {
    var numb = text.match(/\d+/g);
    setText(numb?.toString() || "");
    return text.trim().length > 0 ? "success" : "error";
  }

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

        <div className="d-flex flex-wrap">
          <AlertMsg BtnFun={ConverUpprCase} btnName="Convert To Uppercase" themeType={props.theme} msg="sucessfully conver to Uppercase!" />
          <AlertMsg BtnFun={ConverLowerCase} btnName="Convert To Lowercase" themeType={props.theme} msg="sucessfully conver to Lowercase!" />
          <AlertMsg BtnFun={CopyText} btnName="Copy Text" themeType={props.theme} msg="sucessfully Copy!" />
          <AlertMsg BtnFun={RemoveExtraSpace} btnName="Remove Extra Spaces" themeType={props.theme} msg="sucessfully remove extra space!" />
          <AlertMsg BtnFun={getEmails} btnName="Extract Emails" themeType={props.theme} msg="Emails Extract sucessfully!" />
          <AlertMsg BtnFun={ReverceString} btnName="Reverce Text" themeType={props.theme} msg="Text Reverce sucessfully!" />
          <AlertMsg BtnFun={extractNumbers} btnName="Extract Numbers" themeType={props.theme} msg="Numbers Extract sucessfully!" />
          <AlertMsg BtnFun={ClearText} btnName="Clear Text" themeType={props.theme} msg="sucessfully Clear!" />
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

import React from "react";
import "./style/CommentBox.css";
import { Field } from "redux-form";

const renderTextArea = ({ input, placeholder, meta: { touched, error } }) => {
  return (
    <div style={{ color: "red", fontWeight: "bold", display: "flex" }}>
      <textarea
        style={{ height: "80px" }}
        {...input}
        placeholder={placeholder}
      />
      <div style={{ alignSelf: "center" }}>{touched ? error : ""}</div>
    </div>
  );
};

const CommentBox = ({ placeholder, name }) => {
  return (
    <Field name={name} component={renderTextArea} placeholder={placeholder} />
  );
};

export default CommentBox;

import React from "react";
import { Field } from "redux-form";

class Input extends React.Component {
  renderInput = ({
    input,
    placeholder,
    Style,
    disabled,
    meta: { touched, error },
  }) => {
    return (
      <div style={{ color: "red", fontWeight: "bold", display: "flex" }}>
        <input
          {...input}
          type="text"
          placeholder={placeholder}
          style={Style}
          disabled={disabled}
        />
        <div style={{ alignSelf: "center" }}>{touched ? error : ""}</div>
      </div>
    );
  };

  render() {
    const { placeholder, code, Style, disabled } = this.props;
    return (
      <Field
        disabled={disabled}
        Style={Style}
        name={code}
        component={this.renderInput}
        placeholder={placeholder}
      />
    );
  }
}

export default Input;

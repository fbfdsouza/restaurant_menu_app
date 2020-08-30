import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { placeholder, value } = this.props;

    return (
      <div>
        <input
          type="text"
          placeholder={placeholder}
          value={this.state.value ? this.state.value : value}
          onChange={(e) => this.handleChange(e)}
        />
      </div>
    );
  }
}

export default Input;

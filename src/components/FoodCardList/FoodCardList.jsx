import React from "react";
import "./style/FoodCardList.css";

class FoodCardList extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState,
    });
  }

  render() {
    const { children, category } = this.props;
    const { menuActive } = this.state;

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="ui button" onClick={() => this.toggleMenu()}>
          {category}
        </div>

        <div
          style={
            menuActive
              ? {
                  maxHeight: "200px",
                  transition: "1s",
                  overflowY: "scroll",
                }
              : {
                  maxHeight: "0",
                  transition: "1s",
                  overflowY: "scroll",
                }
          }
        >
          {children}
        </div>
      </div>
    );
  }
}

export default FoodCardList;

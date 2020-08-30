import React from "react";
import Button from "../Button";
import Input from "../Input";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      price: 0,
    };
  }

  addQuantity = (count, code, handleInputChange) => {
    const { addItem } = this.props;
    const { price } = this.state;
    addItem(price);
    handleInputChange(code, count + 1);
    this.setState({ quantity: count + 1 });
  };

  removeQuantity = (count, code, handleInputChange) => {
    const { removeItem } = this.props;
    const { price } = this.state;
    if (count > 0) {
      removeItem(price);
      handleInputChange(code, count - 1);
      this.setState({ quantity: count - 1 });
    }
  };

  calculatePrice = (quantity, price) => {
    if (quantity && price) return `R$ ${quantity * price}`;
  };

  componentDidMount() {
    const { price } = this.props;
    this.setState({ price });
  }

  render() {
    const { quantity } = this.state;
    const { code, handleInputChange } = this.props;
    handleInputChange(
      `subTotal-${code}`,
      this.calculatePrice(this.state.quantity, this.state.price)
    );
    return (
      <div style={{ maxWidth: "150px" }}>
        <div
          style={{
            display: "flex",
            borderRadius: "4px",
            margin: "0px 5px",
          }}
        >
          <Button
            type="button"
            onClick={() =>
              this.removeQuantity(quantity, code, handleInputChange)
            }
          >
            -
          </Button>
          <div style={{ width: "45px", border: "none" }}>
            <Input
              code={code}
              Style={{ paddingBottom: "9px" }}
              disabled={true}
            />
          </div>
          <Button
            type="button"
            onClick={() => this.addQuantity(quantity, code, handleInputChange)}
          >
            +
          </Button>
        </div>
        {this.state.quantity > 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Input
              disabled={true}
              code={`subTotal-${code}`}
              Style={{ border: "none", padding: "2px", textAlign: "center" }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default AddItem;

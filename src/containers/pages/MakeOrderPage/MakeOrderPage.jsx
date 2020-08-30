import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Logo from "../../../components/Logo";
import FoodCardListItem from "../../../components/FoodCardListItem";
import FoodCardList from "../../../components/FoodCardList";
import CommentBox from "../../../components/CommentBox";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { reduxForm, change } from "redux-form";
import { addItem, removeItem } from "../../../redux/reducers/actions";
import swal from "sweetalert";
import "./style/MakeOrderPage.css";

class MakeOrder extends React.Component {
  renderCategorizedItems = (items) => {
    const { addItem, removeItem } = this.props;

    if (!items)
      return (
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Carregando</div>
        </div>
      );
    const categorySet = new Set(items.map((item) => item.category));
    const categories = Array.from(categorySet);
    const categoyArrays = categories.map((category) => {
      return items.filter((item) => item.category === category);
    });

    return categoyArrays.map((rows, index) => {
      let row = rows.map((cell) => (
        <FoodCardListItem
          addItem={addItem}
          removeItem={removeItem}
          key={cell.id}
          description={cell.description}
          image={cell.src}
          handleInputChange={this.handleInputChange}
          itemName={cell.description}
          code={cell.code}
          price={cell.price}
        />
      ));
      return (
        <div style={{ margin: "10px 0px 10px 0px" }}>
          <FoodCardList category={categories[index]}>
            <div style={{ minWidth: "193.21px" }}>{row}</div>
          </FoodCardList>
        </div>
      );
    });
  };

  state = { items: null };

  async componentDidMount() {
    const result = await axios.get(
      "https://mariabellmongoapi.herokuapp.com/items"
    );
    const activeItems = result.data.filter((item) => item.enabled === true);
    this.setState({ items: activeItems });
  }

  onSubmit(values) {
    const { orderTotal } = this.props;

    const order = Object.keys(values).map((item) => {
      if (values[item] !== 0) return `${item}: ${values[item]}`;
      return "";
    });

    const message = order.filter((item) => item !== "");

    swal(`Tudo pronto? seu total: R$ ${orderTotal} + entrega ok?`, {
      buttons: {
        sim: true,
        cancel: "comprar mais items",
      },
    }).then((value) => {
      switch (value) {
        case "sim":
          swal("Ok vamos continuar no whatsapp");
          window.location.href = `https://api.whatsapp.com/send?phone=5585997928607&text=${message} total R$: ${orderTotal} reais`;
          break;

        default:
          swal("Você decidiu continuar comprando");
      }
    });
  }

  handleInputChange = (name, value) => {
    const { change } = this.props;
    change("PostNewForm", name, value);
  };

  render() {
    const { handleSubmit, orderTotal } = this.props;
    console.log(orderTotal);
    return (
      <form
        className="ui reply form"
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ alignSelf: "center" }}>
            <Logo />
          </div>
          <div
            style={{
              width: "90%",
              alignSelf: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {this.renderCategorizedItems(this.state.items)}

            <div
              style={{ alignSelf: "center", color: "red", fontWeight: "bold" }}
            >
              <Input placeholder="Nome do Cliente" code="cliente" />
            </div>
            <div className="field" style={{ margin: "1% 30%" }}>
              <CommentBox
                placeholder="Anote aqui observações sobre seu pedido"
                name="obs"
              />
            </div>
            {orderTotal > 0 && (
              <div
                style={{
                  alignSelf: "center",
                  color: "rgb(28, 107, 57)",
                  fontWeight: "bold",
                  margin: "2px",
                }}
              >
                Total R$: {orderTotal}
                <i class="money bill alternate outline icon" />
              </div>
            )}
            <div style={{ alignSelf: "center" }}>
              <Button variant="ui primary basic button" type="submit">
                Enviar para whatsapp
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.obs) {
    errors.obs = (
      <div data-tooltip="Deixe um comentário" data-position="left center">
        <i className="exclamation circle icon" style={{ paddingLeft: "5px" }} />
      </div>
    );
  }

  if (!values.cliente) {
    errors.cliente = (
      <div
        data-tooltip="Não esqueça de se identificar"
        data-position="left center"
      >
        <i className="exclamation circle icon" />
      </div>
    );
  }

  return errors;
}

// Decorate form with dispatchable actions
const mapDispatchToProps = {
  change,
  addItem,
  removeItem,
};

const mapStateToProps = (state) => {
  return { orderTotal: state.orderTotal };
};

// create a redux form, then include the above decorators for the created form to utilize
export default reduxForm({
  form: "PostNewForm",
  validate,
})(connect(mapStateToProps, mapDispatchToProps)(MakeOrder));

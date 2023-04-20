import "./App.css";
import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
//1. add data
import data from "./data.json";
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {
  // add constructor
  constructor(props) {
    super(props);
    this.state = {
      pizza: "",
      //add show modal to manage opening and closing of our modal
      showModal: false,
      selectedPizza: "",
    };
  }

  addPizza = () => {
    this.setState({
      pizza: this.state.pizza + "🍕",
    });
  };
  //function handle the show of the modal
  handleOnHide = () => {
    //update state
    this.setState({
      showModal: false,
    });
  };

  //function take the selected pizza and show it.
  handleOnShow = (pizzaName) => {
    this.setState({
      showModal: true,
      selectedPizza: pizzaName
    })
  };

  render() {
    return (
      <>
      <p onClick={() => this.handleOnShow('test')}>show me not test</p>
        <Header pizza={this.state.pizza} />
        <Main 
          dataProps={data}
          addPizza={this.addPizza}
          handleOnShow={this.handleOnShow}
           />
        <Footer />

        <Modal show={this.state.showModal} onHide={this.handleOnHide}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.selectedPizza}</Modal.Title>
        </Modal.Header>
      </Modal>
      </>
    );
  }
}

export default App;

import React from "react";
import Pizza from "./Pizza.js";
import "./main.css";
import { Container, Row } from "react-bootstrap";

class Main extends React.Component {
  render() {
    // console.log('we moved it to App', this.props.dataProps);
    // console.log(this.props.addPizza);

    let pizzas = this.props.dataProps.map((newPizza, index) => {
      return (
        <Pizza
          pie={newPizza.name}
          imageURL={newPizza.imageURL}
          key={index}
          data={this.props.dataProps}
          addPizza={this.props.addPizza}
          handleOnShow={this.props.handleOnShow}
        />
      );
    });

    return (
      <main>
        <Container>
          <Row lg={4} md={3} sm={2} xs={1}>
          {pizzas}
          </Row>
        </Container>
      </main>
    );
  }
}

export default Main;

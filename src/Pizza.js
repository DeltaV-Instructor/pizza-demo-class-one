import React from "react";

class Pizza extends React.Component {
  render() {
    // console log some data here
    console.log("our pizza props", this.props.pie);
    return (
      <>
        <article>
          <img src={this.props.image_url}/>
          <h3>Toppings: {this.props.toppings}</h3>
          <p>CRUST: {this.props.crust}</p>
        </article>
      </>
    );
  }
}

export default Pizza;

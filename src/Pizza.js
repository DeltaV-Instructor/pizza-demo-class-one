import React from "react";

class Pizza extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //we can have several properties
      //count likes
      likes: 0,
      //assign default values to make state more readable.
      //global variable would update only on valie and not render state for the component.
      pizzaNeeded: false
    };
  }

  //helper function
  handleLikes = () => {
    console.log("on click here");
    //method is setState which takes an object
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  pizzaNeeded = () => {
    //add a method to set state to be true
  };

  pizzaGot = () => {
    //set state to be false.
  };

  render() {
    return (
      <>
        <article>
          <h3>{this.props.pie}</h3>
          <p> {this.state.likes}Likes!</p>
          <p onClick={this.handleLikes}>Click to like this Pizza</p>
          <img src={this.props.imageURL} alt={this.props.pie} />

        {/* conditional rendering for our button */}
        {/* message to appear if pizza is awesome */}
       
        {/* 
        Ternary Operator
        What? True : False 
        BooleanValue ? console.log('true') : console.log('false');
        */}

        <div>{this.state.pizzaNeeded ? 'I need this Pizza!' : 'hey IM good'}</div>
        
        </article>
      </>
    );
  }
}

export default Pizza;

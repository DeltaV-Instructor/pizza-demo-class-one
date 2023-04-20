import React from "react";
import './pizza.css';
import { Card, Button, Col } from "react-bootstrap";



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
    this.setState({
      pizzaNeeded: true
    })
  };

  pizzaGot = () => {
    //set state to be false.
    this.setState({
      pizzaNeeded: false
    })
  };

helpHandleOnShow = () =>{
 this.props.handleOnShow(this.props.pie);
};


  render() {
    console.log('iiiiiii',this.props.data);
    return (
      <>
        {/* <article>
          <h3 onClick={this.helpHandleOnShow}> 🍕 {this.props.pie}</h3>
          <p> {this.state.likes}Likes!</p>
          <p onClick={this.handleLikes}>Click to like this Pizza</p>
          <img src={this.props.imageURL} alt={this.props.pie} onClick={this.props.addPizza}/> */}

        {/* conditional rendering for our button */}
        {/* message to appear if pizza is awesome */}
       
        {/* 
        Ternary Operator
        What? True : False 
        BooleanValue ? console.log('true') : console.log('false');
        */}
{/* 
        <div>{this.state.pizzaNeeded ? 'I need this Pizza!' : 'hey IM good'}</div>
        <Button variant="success"  onClick={this.pizzaNeeded}>I need this Pizza!</Button>
        <Button variant="warning"  onClick={this.pizzaGot}>I got this pizza!</Button>
        </article> */}


        <Col className="mt-4 ">
          <Card className="h-100 p-3">
            <Card.Title onClick={this.helpHandleOnShow}>
              {this.props.pie}
            </Card.Title>
            <Card.Img
              className="mb-4 "
              src={this.props.imageURL}
              alt={this.props.pie}
              title={this.props.pie}
              onClick={this.props.addPizza}
            />
            <p>{this.state.likes} Likes!</p>
            <p onClick={this.handleLikes}>Click to Like this Pizza?</p>
            <div>{this.state.pizzaNeed ? 'I need this Pizza!' : ''}</div>
            <Button onClick={this.pizzaNeeded} className="buttonMargin">I need Pizza!</Button>
            <Button variant="success" onClick={this.pizzaGot}>
              I got some Pizza!
            </Button>
          </Card>
        </Col>










      </>
    );
  }
}

export default Pizza;

import "./App.css";
import React from "react";
import Header from './Header.js';

class App extends React.Component {
  //put here
  
  //1. add constructor
  // add helper functions

  //2. we need a render() {  return is where our html comes from }
  render() {
    console.log('our input or output');
    return (
      <>
     {/* add a header code ends up here */}
       <Header />
     {/* add a main  */}
     {/* lastly lets add some pizzas  */}
      </>
    );
  }
}

export default App;

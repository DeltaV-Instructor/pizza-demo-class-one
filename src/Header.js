import React from 'react';


class Header extends React.Component {

render() {
  // console.log('empty string',this.props.pizza);
  return (
     <>
      <header>
        <h1>Pizza of 301 {this.props.pizza}</h1>
      </header>
     </>
  );
}

}

export default Header;
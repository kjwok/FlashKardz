import React, { Component } from 'react';
import './App.css';
import Kard from './Kard/Kard';

import german from "./Resources/german.json"

class App extends Component {
  state = {
    newKard: false,
    flipped: false,
    index:  0
  }
  
  flipSides = (event) => {
    const flip = this.state.flipped;
    this.setState({flipped: !flip})
  }

  nextKard = (event) => {
    const doesShow = this.state.newKard;
    this.setState({newKard: !doesShow})
  }

 render() {
console.log("test a.json :: " + JSON.stringify(german));

  const style = {
      backgroundColor: 'turquoise',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer'
    };

      if((this.state.index +1) < 5)
      {
          this.state.index++;
          console.log(this.state.index);
      }
      else {
          this.state.index = 0;
      }

    let index = this.state.index;

   return (
      <div className="App">
        <header className="Header">
          <h1>FlashKardz</h1>

        </header>
        <div>
          <Kard 
          card={german[index]}
          //theres a click in here and in the kard.js FIX
          click={this.flipSides}></Kard>
        </div>
        <div>
          <button
            style={style}
            onClick={this.nextKard}
          >Next Kard</button>
        </div>
      </div>
    );
 };
};

export default App;

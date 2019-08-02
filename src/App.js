import React, { Component } from "react";
import "./App.css";
import Membre from "./components/Membre";
import Button from "./components/Button";

const famille = {
  membre1: {
    nom: "Antho",
    age: 27
  },
  membre2: {
    nom: "Ségolène",
    age: 27
  },
  membre3: {
    nom: "Eléanor",
    age: 0
  },
  membre4: {
    nom: "Mocha",
    age: 2
  }
};

class App extends Component {
  state = {
    famille
  };

  handleClick = num => {
    const famille = { ...this.state.famille };
    famille.membre1.age += num;
    this.setState({ famille });
  };

  render() {
    const { famille } = this.state;
    return (
      <div className="App">
        <h1>React App</h1>
        <Membre nom={famille.membre1.nom} age={famille.membre1.age} />
        <Membre nom={famille.membre2.nom} age={famille.membre2.age} />
        <Membre nom={famille.membre3.nom} age={famille.membre3.age} />
        <Membre nom={famille.membre4.nom} age={famille.membre4.age}>
          <strong>Je suis Mocha.</strong>
        </Membre>
        <Button vieillir={() => this.handleClick(2)} />
      </div>
    );
  }
}

export default App;

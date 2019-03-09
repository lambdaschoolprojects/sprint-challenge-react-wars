import React, { Component } from 'react';
import './App.css';

import CharacterList from './components/CharacterList';
import NavButton from './components/NavButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results,
          nextPage: data.next,
          previousPage: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  onButtonClick = url => {
    if(!url) return;
    this.getCharacters(url);
  }

  // getButtons() {
  //   let buttons = [];
  //
  //   if(this.state.previousPage != null)
  //     buttons.push(<NavButton name="previousButton" url={this.state.previousPage} onButtonClick={this.onButtonClick}>Previous</NavButton>)
  //
  //   if(this.state.nextPage != null)
  //     buttons.push()
  //
  //   return buttons;
  // }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="buttonDiv">
          <NavButton name="previousButton" url={this.state.previousPage} onButtonClick={this.onButtonClick}>Previous</NavButton>
          <NavButton name={"nextButton"} url={this.state.nextPage} onButtonClick={this.onButtonClick}>Next</NavButton>
        </div>
        <CharacterList characterList={this.state.starwarsChars}/>
      </div>
    );
  }
}

export default App;

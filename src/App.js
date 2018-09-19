import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = () => <h2>Hello World</h2>
const Img1 = () => <img src="https://www.w3schools.com/html/pic_trulli.jpg" title="Italian Trulli"></img>

//functional component, stateless component
const Img2 = (props) => {
  let {scr1, title} = props;
  scr1 = scr1 || "https://www.w3schools.com/html/pic_trulli.jpg";
  title = title || "CSI Training";
  return (
    <img src={scr1} title={title} width="500" height="333" />
  )
}
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React - from CSI</h1>
          <Hello />
        </header>
        <p1 className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        <br></br><Img1 />
        <br></br><Img2 />
        <Img2 scr1="https://www.w3schools.com/html/img_girl.jpg" title="Girls"></Img2>
        <Img2 scr1="https://www.w3schools.com/html/img_chania.jpg" title="Lorong"></Img2>

        </p1>
      </div>
    );
  }
}

export default App;

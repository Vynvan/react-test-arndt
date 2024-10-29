import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function Message(props) {
  return <p>{props.message}</p>
}

class MessageClass extends Component {
  render() {
    return <p>{this.props.message}</p>
  }
}

function App() {
  return (
    <div className="App">
      <Message message="function" />
      <MessageClass message="class" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

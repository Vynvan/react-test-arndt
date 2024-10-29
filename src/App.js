import './App.css';
import React, { Component } from 'react';

class Message extends Component {
  render() {
    return <p>{this.props.message}</p>
  }
}

function MessageFunky(props) {
  return <p>{props.message}</p>
}

function Header() {
  return <div>Hallo Header</div>;
}

function LikeButton() {
  const [likes, setLikes] = React.useState(0);
  const onClick = () => setLikes(likes + 1);
  return <button onClick={onClick}>Like ({likes})</button>
}

function TodoList() {
  const [items, setItems] = React.useState([]);

  function addTodo() {
    const {value} = document.getElementById('todo-input');
    const array = [...items, value];
    setItems(array);
  }

  return <>
    <ul>
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
    <input type="text" id="todo-input" placeholder="Neue Aufgabe hinzufügen" />
    <button className="btn btn-primary rounded-circle" onClick={addTodo} title="Hinzufügen">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
      </svg>
    </button>
  </>
}

function App() {
  return (
    <div className="App">
      <Header />
      <Message message="classic" />
      <MessageFunky message="funky" />
      <TodoList />
      <LikeButton />
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LikeButton() {
    const [likes, setLikes] = React.useState(0);
    const onClick = () => setLikes(likes + 1);
    return (
        <button className="btn btn-primary" onClick={onClick}>
            Like ({likes})
        </button>
    );
}

function TodoList() {
    const [items, setItems] = React.useState([]);
    const click = () => setItems([...items, document.getElementById('todo-input').value]);

    return (
        <div className="container">
            <div className="m-4 p-2 rounded align-items-center shadow todo">
                <input type="text" id="todo-input" placeholder="Neue Aufgabe hinzufügen" />
                <button className="mx-2 btn btn-primary rounded-circle" onClick={click} title="Hinzufügen">
                    {/* prettier-ignore */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                        className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                    </svg>
                </button>
            </div>
            <ul className="ps-0">
                {items.map((item, index) => (
                    <li className="list-unstyled m-4 p-2 rounded align-items-center shadow todo" key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <TodoList />
            <LikeButton />
        </div>
    );
}

export default App;

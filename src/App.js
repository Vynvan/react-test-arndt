import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './components/ContactForm';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const onClick = () => setLikes(likes + 1);
    return (
        <button className="btn btn-primary" onClick={onClick}>
            Like ({likes})
        </button>
    );
}

function Container() {
    const [likes, setLikes] = useState(0);
    const onClick = () => setLikes(likes + 1);

    return (
        <>
            <DumbLikeButton likes={likes} onClick={onClick} />
            <DumbLikeButton likes={likes} onClick={onClick} />
        </>
    );
}

function DumbLikeButton({likes, onClick}) {
    return (
        <button className="btn btn-primary" onClick={onClick}>
            Like ({likes})
        </button>
    );
}

function TodoList() {
    const [items, setItems] = useState([]);
    const click = () => setItems([...items, document.getElementById('todo-input').value]);
    
    useEffect(() => {
        if (items.length === 0)
            setItems(JSON.parse(localStorage.getItem('todos')))
        else localStorage.setItem('todos', JSON.stringify(items));
    }, [items]);

    return (
        <div className="container">
            <div className="m-4 p-2 d-flex align-items-center justify-content-center rounded shadow todo">
                <input type="text" id="todo-input" placeholder="Neue Aufgabe hinzufügen" />
                <button className="mx-2 btn btn-primary rounded-circle" onClick={click} title="Hinzufügen">
                    {/* prettier-ignore */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                    </svg>
                </button>
            </div>
            <ul className="ps-0">
                {items.map((item, index) => (
                    <li className="m-4 p-2 list-unstyled rounded shadow todo" key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    return (
        <Router>
            <nav className='navbar bg-white py-3 sticky-top card shadow d-flex flex-row justify-content-center mb-5'>
                <Link to='/' className='btn'>TodoList</Link>
                <Link to='/contact' className='btn'>Kontakt</Link>
            </nav>
            <Routes>
                <Route path="/" element={
                    <div className="App">
                        <TodoList />
                        <LikeButton />
                        <Container />
                    </div>
                } />
                <Route path="/contact" element={
                    <div className='container card shadow d-flex justify-content-center'>
                        <ContactForm />
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;

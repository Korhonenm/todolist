import React, { useState } from 'react';
import './App.css';

function App() {
  const[desc, setDesc] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setDesc({...desc, [event.target.name]: event.target.value});
  }

  const addDesc =(event) => {
    event.preventDefault();
    setTodos([...todos, desc]);
  }

  return (
    <div className="App">
      <h1>Todolist</h1>
      <form onSubmit={addDesc}>
        <label>Description:</label>
        <input type="text" name="description" value={desc.description} onChange ={inputChanged} />
        <label>Date:</label>
        <input type="date" name="date" value={desc.date} onChange ={inputChanged} />
        <input type="submit" value="Add"/>
      </form>
      <table>
        <tbody>
          {
          todos.map((desc, index) =>
          <tr key={index}>
            <td>{desc.date}</td>
            <td>{desc.description}</td>
          </tr>
          )
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;

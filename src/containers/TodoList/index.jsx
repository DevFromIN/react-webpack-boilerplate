import { useEffect, useRef, useState } from 'react';
import './styles.css';

const STORAGE_KEY = "rwb/todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  function readSavedLists() {
    const rawSavedLists = localStorage.getItem(STORAGE_KEY);

    if (rawSavedLists) {
      const savedLists = JSON.parse(rawSavedLists)

      if (Array.isArray(savedLists)) {
        setTodos(savedLists);
      }
    }
  }

  function resetTaskInput() {
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  useEffect(() => {
    readSavedLists();
  }, []);

  useEffect(() => {
    resetTaskInput();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const saveTask = () => {
    const inputValue = inputRef.current.value;
    const isValidTask = inputValue.replace(/\s/g, '').length > 0;

    if (isValidTask) {
      setTodos(todos => [{ id: Math.random(), task: inputValue }, ...todos]);
    }
  };

  const removeTask = (taskId) => () => {
    setTodos(todos => todos.filter(todo => todo.id !== taskId));
  };

  const handleTaskInputKey = e => {
    if (e.key === 'Enter') {
      saveTask();
    }
  }

  return (
    <div className="container">
      <h3 className="task-header">Basic React To-do list</h3>
      <input className="task-input" ref={inputRef} onKeyDown={handleTaskInputKey} placeholder="Enter your tasks!" type="text" />
      <button className="save-btn" onClick={saveTask} type="button">SAVE</button>

      <ul className="tasks-list">
        {todos.map(todo => (
          <li key={todo.id} className="task">
            <span>{todo.task}</span>
            <span className="clear-task" onClick={removeTask(todo.id)}>X</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;
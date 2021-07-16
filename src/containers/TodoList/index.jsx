import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from 'redux-injectors';

import reducer from './store/reducer';
import { getTodos } from './store/selectors';
import { addTask, removeTask, setTasks } from './store/actions';

import './styles.css';

const STORAGE_KEY = "rwb/todos";

const TodoList = () => {
  useInjectReducer({ key: 'todoList', reducer });
  const todos = useSelector(getTodos());
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  function readSavedLists() {
    const rawSavedLists = localStorage.getItem(STORAGE_KEY);

    if (rawSavedLists) {
      const savedLists = JSON.parse(rawSavedLists);

      if (Array.isArray(savedLists)) {
        dispatch(setTasks(savedLists));
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

  const handleAddTask = () => {
    const inputValue = inputRef.current.value;
    const isValidTask = inputValue.replace(/\s/g, '').length > 0;

    if (isValidTask) {
      dispatch(addTask({ id: Math.random(), task: inputValue }));
    }
  };

  const handleRemoveTask = (taskId) => () => {
    dispatch(removeTask(taskId));
  };

  const handleTaskInputKey = e => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  }

  return (
    <div className="container">
      <h3 className="task-header">Basic React To-do list with Redux</h3>
      <input className="task-input" ref={inputRef} onKeyDown={handleTaskInputKey} placeholder="Enter your tasks!" type="text" />
      <button className="save-btn" onClick={handleAddTask} type="button">ADD</button>

      <ul className="tasks-list">
        {todos?.map(todo => (
          <li key={todo.id} className="task">
            <span>{todo.task}</span>
            <span className="remove-task" onClick={handleRemoveTask(todo.id)} title="Remove Task">X</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;
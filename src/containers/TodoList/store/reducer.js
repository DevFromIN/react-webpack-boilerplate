import produce from 'immer';
import { ADD_TASK, REMOVE_TASK, SET_LOAD_STATUS, SET_TASKS } from './constants';

const initialState = {
  loadStatus: true, // will be helpful to update UI accordingly
  todos: [],
};

const TodoListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_LOAD_STATUS:
        draft.loadStatus = action.payload;
        break;

      case ADD_TASK:
        draft.todos.unshift(action.payload);
        break;

      case REMOVE_TASK:
        draft.todos = draft.todos.filter(task => task.id !== action.payload);
        break;

      case SET_TASKS:
        draft.todos = action.payload;
        break;

      default:
        break;
    }
  });

export default TodoListReducer;

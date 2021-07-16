import produce from 'immer';
import { ADD_TASK, REMOVE_TASK, SET_TASKS } from './constants';

const initialState = {
  todos: [],
};

const TodoListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_TASK:
        draft.todos.unshift(action.payload);
        break;

      case REMOVE_TASK:
        draft.todos = draft.todos.filter(task => task.id !== action.payload);
        break;

      case SET_TASKS:
        draft.todos = action.payload;
        break;
    }
  });

export default TodoListReducer;

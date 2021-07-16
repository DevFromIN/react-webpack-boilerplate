import { ADD_TASK, REMOVE_TASK, SET_TASKS } from './constants';

export const addTask = taskObj => ({
  type: ADD_TASK,
  payload: taskObj,
});

export const removeTask = taskId => ({
  type: REMOVE_TASK,
  payload: taskId,
});

export const setTasks = tasks => ({
  type: SET_TASKS,
  payload: tasks,
});

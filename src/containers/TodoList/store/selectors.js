import { createSelector } from 'reselect';

const todoState = state => state.todoList;

export const getTodos = () => createSelector(todoState, store => store.todos);
export const getLoadStatus = () =>
  createSelector(todoState, store => store.loadStatus);

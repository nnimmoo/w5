
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_DONE_TODO = 'ADD_DONE_TODO';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    text,
    id: new Date().getTime().toString(),
    done: false,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const addDoneTodo = (id) => ({
  type: ADD_DONE_TODO,
  payload: {
    id,
  },
});

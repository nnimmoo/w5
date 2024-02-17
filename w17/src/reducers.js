// reducers.js
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, ADD_DONE_TODO } from './actions';

const initialState = {
  todos: [],
  doneTodos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case ADD_DONE_TODO:
      const doneTodo = state.todos.find(todo => todo.id === action.payload.id);
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
        doneTodos: [...state.doneTodos, doneTodo],
      };
    default:
      return state;
  }
};

export default todoReducer;

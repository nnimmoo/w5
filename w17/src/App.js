import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './components/TodoApp';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TodoApp />
        <TodoList />
        <DoneList />
      </div>
    </Provider>
  );
};

export default App;

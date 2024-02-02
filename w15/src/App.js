import './App.css';
// App.js
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { router } from './router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={createBrowserRouter(router)} />
    </div>
  );
}

export default App;

